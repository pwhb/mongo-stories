import Author from '$lib/models/author';
import { getDB } from '$lib/server/db';
import { AUTHOR_COLLECTION } from '$lib/utils/constants';
import { formatResponse } from '$lib/utils/format';
import { slugify } from '$lib/utils/slugify';
import status from 'http-status';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const { authorId } = params;
		const db = await getDB();
		const author = await db.collection(AUTHOR_COLLECTION).findOne({ _id: new ObjectId(authorId) });
		return json(formatResponse(author));
	} catch (e) {
		console.log(e);
		throw error(400, 'Error');
	}
};

export const PUT: RequestHandler = async ({ request, params }) => {
	try {
		const { firstName, lastName, penName, intro, bio, image, thumbnail } = await request.json();
		const slug = slugify(firstName + ' ' + lastName);
		const { authorId } = params;
		const db = await getDB();
		const { value } = await db
			.collection(AUTHOR_COLLECTION)
			.findOneAndUpdate(
				{ _id: new ObjectId(authorId) },
				{ $set: { firstName, lastName, penName, intro, bio, image, thumbnail, slug } },
				{ returnDocument: "after" }
			);
		return json(formatResponse(value), { status: status.CREATED });
	} catch (e) {
		console.log(e);
		throw error(400, 'Error');
	}
};
