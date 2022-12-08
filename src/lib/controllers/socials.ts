import { getDB } from '$lib/server/db';
import { SOCIAL_COLLECTION } from '$lib/utils/constants';

export const getSocials = async () => {
	const db = await getDB();
	const socials = await db.collection(SOCIAL_COLLECTION).find({}).toArray();
	return socials;
};
