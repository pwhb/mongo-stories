import dbConnect from '$lib/server/connectDB';
import context from '$lib/models/context';

export const getContext = async () => {
	await dbConnect();
	const doc = await context.findOne({ name: 'default' });
	return doc;
};
