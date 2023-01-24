import Post from '$lib/models/post';
import Song from '$lib/models/song';
import { getDB } from '$lib/server/db';
import { POST_COLLECTION } from '$lib/utils/constants';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';


export const POST: RequestHandler = async ({ request }) => {
	try {
		const {
			title,
			finishedDate,
			type,
			author,
			body,
			tags,
			imageAlbum,
			backgroundImage,
			heroImage,
			thumbnail,
			subtitle,
			song } = await request.json();
		const post = new Post(title, finishedDate, type, author, body, tags, imageAlbum, backgroundImage, heroImage, thumbnail, subtitle, song);
		const db = await getDB();
		await db.collection(POST_COLLECTION).insertOne(post);

		return json({ data: post }, { status: 201 });
	} catch (e) {
		console.log(e);
		throw error(400, 'Error');
	}
};

export const GET: RequestHandler = async () => {
	try {
		const db = await getDB();
		const posts = await db.collection(POST_COLLECTION).find().toArray();

		return json({ data: posts }, { status: 200 });
	} catch (e) {
		console.log(e);
		throw error(400, 'Error');
	}
};
