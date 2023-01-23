import Song from '$lib/models/song';
import { getDB } from '$lib/server/db';
import { SONG_COLLECTION } from '$lib/utils/constants';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { title, artist, audioUrl, imageUrl, youtubeUrl } = await request.json();
		const song = new Song(title, artist, audioUrl, imageUrl, youtubeUrl);
		const db = await getDB();
		await db.collection(SONG_COLLECTION).insertOne(song);

		return json({ data: song }, { status: 201 });
	} catch (e) {
		console.log(e);
		throw error(400, 'Error');
	}
};

export const GET: RequestHandler = async ({}) => {
	try {
		const db = await getDB();
		const songs = await db.collection(SONG_COLLECTION).find().toArray();

		return json({ data: songs }, { status: 200 });
	} catch (e) {
		console.log(e);
		throw error(400, 'Error');
	}
};
