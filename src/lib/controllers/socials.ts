import social from '$lib/models/social';
import dbConnect from '$lib/server/connectDB';

export const getSocials = async () => {
	await dbConnect();
	const docs = await social.find().lean();
	return docs;
};
