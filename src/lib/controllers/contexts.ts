import { getDB } from '$lib/server/db';

import { ObjectId } from 'mongodb';
import { CONTEXT_ID } from '$env/static/private';
import { CONTEXT_COLLECTION } from '$lib/utils/constants';

export const getContext = async () => {
	const db = await getDB();
	const context = await db.collection(CONTEXT_COLLECTION).findOne({ _id: new ObjectId(CONTEXT_ID) });
	return context;
};
