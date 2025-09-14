import * as v from 'valibot';
import { query, command, getRequestEvent } from '$app/server';

// Get the current counter value
export const getCounterValue = query(async (): Promise<number> => {
	const { platform } = getRequestEvent();
	const db = platform?.env.DB;

	if (!db) {
		throw new Error('Database not available');
	}

	try {
		const result = await db.prepare(
			'SELECT value FROM counters WHERE name = ?'
		).bind('main').first<{ value: number }>();

		return result?.value ?? 0;
	} catch (error) {
		console.error('Error fetching counter value:', error);
		// If counter doesn't exist, initialize it
		await db.prepare(
			'INSERT OR IGNORE INTO counters (name, value) VALUES (?, ?)'
		).bind('main', 0).run();
		return 0;
	}
});

// Increment the counter
export const incrementCounter = command(async (): Promise<number> => {
	const { platform } = getRequestEvent();
	const db = platform?.env.DB;

	if (!db) {
		throw new Error('Database not available');
	}

	try {
		// Use UPDATE with RETURNING to get the new value atomically
		const result = await db.prepare(`
			UPDATE counters
			SET value = value + 1, updated_at = CURRENT_TIMESTAMP
			WHERE name = ?
			RETURNING value
		`).bind('main').first<{ value: number }>();

		if (!result) {
			// Counter doesn't exist, create it with value 1
			await db.prepare(
				'INSERT INTO counters (name, value) VALUES (?, ?)'
			).bind('main', 1).run();
			return 1;
		}

		return result.value;
	} catch (error) {
		console.error('Error incrementing counter:', error);
		throw new Error('Failed to increment counter');
	}
});

// Decrement the counter
export const decrementCounter = command(async (): Promise<number> => {
	const { platform } = getRequestEvent();
	const db = platform?.env.DB;

	if (!db) {
		throw new Error('Database not available');
	}

	try {
		// Use UPDATE with RETURNING to get the new value atomically
		const result = await db.prepare(`
			UPDATE counters
			SET value = value - 1, updated_at = CURRENT_TIMESTAMP
			WHERE name = ?
			RETURNING value
		`).bind('main').first<{ value: number }>();

		if (!result) {
			// Counter doesn't exist, create it with value -1
			await db.prepare(
				'INSERT INTO counters (name, value) VALUES (?, ?)'
			).bind('main', -1).run();
			return -1;
		}

		return result.value;
	} catch (error) {
		console.error('Error decrementing counter:', error);
		throw new Error('Failed to decrement counter');
	}
});

// Set counter to a specific value (with validation)
export const setCounterValue = command(v.number(), async (value: number) => {
	const { platform } = getRequestEvent();
	const db = platform?.env.DB;

	if (!db) {
		throw new Error('Database not available');
	}

	try {
		// Use INSERT OR REPLACE to set the value
		await db.prepare(`
			INSERT OR REPLACE INTO counters (name, value, updated_at)
			VALUES (?, ?, CURRENT_TIMESTAMP)
		`).bind('main', Math.floor(value)).run();

		return Math.floor(value);
	} catch (error) {
		console.error('Error setting counter value:', error);
		throw new Error('Failed to set counter value');
	}
});