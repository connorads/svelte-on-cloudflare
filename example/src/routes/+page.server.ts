import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const kv = platform?.env.COUNTER_KV;
	
	if (!kv) {
		return {
			initialCount: 0,
			error: 'KV namespace not available'
		};
	}

	try {
		const countValue = await kv.get('counter');
		const initialCount = countValue ? parseInt(countValue, 10) : 0;
		
		return {
			initialCount
		};
	} catch (error) {
		console.error('Error loading counter from KV:', error);
		return {
			initialCount: 0,
			error: 'Failed to load counter'
		};
	}
};