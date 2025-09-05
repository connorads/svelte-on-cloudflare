import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ platform }) => {
	console.log('[Counter API] GET request received');
	const kv = platform?.env.COUNTER_KV;
	
	if (!kv) {
		console.error('[Counter API] KV namespace not available');
		return json({ error: 'KV namespace not available' }, { status: 500 });
	}

	try {
		const countValue = await kv.get('counter');
		const count = countValue ? parseInt(countValue, 10) : 0;
		console.log(`[Counter API] Retrieved counter value: ${count}`);
		
		return json({ count });
	} catch (error) {
		console.error('[Counter API] Error reading from KV:', error);
		return json({ error: 'Failed to read counter' }, { status: 500 });
	}
};

export const POST: RequestHandler = async ({ request, platform }) => {
	const kv = platform?.env.COUNTER_KV;
	
	if (!kv) {
		console.error('[Counter API] KV namespace not available');
		return json({ error: 'KV namespace not available' }, { status: 500 });
	}

	try {
		const { action }: { action: 'increment' | 'decrement' } = await request.json();
		console.log(`[Counter API] POST request received - action: ${action}`);

		const countValue = await kv.get('counter');
		let count = countValue ? parseInt(countValue, 10) : 0;
		console.log(`[Counter API] Current counter value: ${count}`);
		
		if (action === 'increment') {
			count += 1;
		} else if (action === 'decrement') {
			count -= 1;
		} else {
			return json({ error: 'Invalid action' }, { status: 400 });
		}
		
		await kv.put('counter', count.toString());
		console.log(`[Counter API] Updated counter to: ${count}`);		
		return json({ count });
	} catch (error) {
		console.error('[Counter API] Error updating KV:', error);
		return json({ error: 'Failed to update counter' }, { status: 500 });
	}
};