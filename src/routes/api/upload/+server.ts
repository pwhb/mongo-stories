import Song from '$lib/models/song';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.body?.getReader();
	console.log('api called');
    
    
	console.log('body', body);
	return json({ test: 'hello friend' });
};
