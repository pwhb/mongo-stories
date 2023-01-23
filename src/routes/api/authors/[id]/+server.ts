import { getDB } from '$lib/server/db';
import { AUTHOR_COLLECTION } from '$lib/utils/constants';
import { slugify } from '$lib/utils/slugify';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const { id } = params;
		const db = await getDB();
		const author = await db.collection(AUTHOR_COLLECTION).findOne({ _id: new ObjectId(id) });
		return json({ message: 'success', data: author }, { status: 200 });
	} catch (e) {
		console.log(e);
		throw error(400, 'Error');
	}
};

export const PUT: RequestHandler = async ({ request, params }) => {
	try {
		const keys = ['firstName', 'lastName', 'penName', 'intro', 'bio', 'image', 'thumbnail'];
		const body = await request.json();
		const slug = slugify(body.firstName + ' ' + body.lastName);
		const update: any = { slug };

		keys.forEach((key) => {
			if (body[key]) {
				update[key] = body[key];
			}
		});

		const { id } = params;
		const db = await getDB();
		const { value } = await db
			.collection(AUTHOR_COLLECTION)
			.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: update }, { returnDocument: 'after' });
		return json({ message: 'updated', data: value }, { status: 201 });
	} catch (e) {
		console.log(e);
		throw error(400, 'Error');
	}
};
