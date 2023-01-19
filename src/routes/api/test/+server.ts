import Song from '$lib/models/song';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	return json({ test: 'hello friend' });
};
