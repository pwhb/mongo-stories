import Author from '$lib/models/author';
import { getDB } from '$lib/server/db';
import { formatResponse } from '$lib/utils/format';

import { error, json, type RequestHandler } from '@sveltejs/kit';
import { AUTHOR_COLLECTION } from '$lib/utils/constants';

export const GET: RequestHandler = async () => {
	try {
		const db = await getDB();
		const authors = await db.collection(AUTHOR_COLLECTION).find({}).toArray();
		return json({ message: 'success', data: authors }, { status: 200 });
	} catch (e) {
		console.log(e);
		throw error(400, 'Error');
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { firstName, lastName, penName, intro, bio, image, thumbnail } = await request.json();
		const author = new Author(firstName, lastName, penName, intro, bio, image, thumbnail);
		const db = await getDB();
		await db.collection(AUTHOR_COLLECTION).insertOne(author);

		return json({ message: 'created', data: author }, { status: 201 });
	} catch (e) {
		console.log(e);
		throw error(400, 'Error');
	}
};
