import Song from '$lib/models/song';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	// const body = await request.json();
	console.log('api called');
	return json({ test: 'hello friend' });
};
