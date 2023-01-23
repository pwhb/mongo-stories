import Song from '$lib/models/song';
import { downloadCommand, s3Client } from '$lib/server/s3';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const response = await s3Client.send(downloadCommand);
	const data = response.Body
	console.log('data', data);
	return json({ test: 'hello friend' });
};
