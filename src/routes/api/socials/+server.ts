import Social from '$lib/models/social';
import { getDB } from '$lib/server/db';
import { SOCIAL_COLLECTION } from '$lib/utils/constants';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const db = await getDB();
	const socials = await db.collection(SOCIAL_COLLECTION).find().toArray();
	return json({ message: 'success', data: socials }, { status: 200 });
};

export const POST: RequestHandler = async ({ request }) => {
	const { placement, url, icon, name } = await request.json();
	const social = new Social(placement, url, icon, name);
	const db = await getDB();
	await db.collection(SOCIAL_COLLECTION).insertOne(social);

	return json({ message: 'success', data: social }, { status: 201 });
};
