import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ platform }) => {
	const kv = platform?.env.COUNTER_KV;
	
	if (!kv) {
		return json({ error: 'KV namespace not available' }, { status: 500 });
	}

	try {
		const countValue = await kv.get('counter');
		const count = countValue ? parseInt(countValue, 10) : 0;
		
		return json({ count });
	} catch (error) {
		console.error('Error reading from KV:', error);
		return json({ error: 'Failed to read counter' }, { status: 500 });
	}
};

export const POST: RequestHandler = async ({ request, platform }) => {
	const kv = platform?.env.COUNTER_KV;
	
	if (!kv) {
		return json({ error: 'KV namespace not available' }, { status: 500 });
	}

	try {
		const { action }: { action: 'increment' | 'decrement' } = await request.json();

		const countValue = await kv.get('counter');
		let count = countValue ? parseInt(countValue, 10) : 0;
		
		if (action === 'increment') {
			count += 1;
		} else if (action === 'decrement') {
			count -= 1;
		} else {
			return json({ error: 'Invalid action' }, { status: 400 });
		}
		
		await kv.put('counter', count.toString());
		
		return json({ count });
	} catch (error) {
		console.error('Error updating KV:', error);
		return json({ error: 'Failed to update counter' }, { status: 500 });
	}
};