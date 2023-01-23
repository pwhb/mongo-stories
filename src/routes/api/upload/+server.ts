import Song from '$lib/models/song';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.body?.getReader();
	console.log('api called');

	const data = await body?.read();
	console.log('data', data);
	return json({ test: 'hello friend' });
};
