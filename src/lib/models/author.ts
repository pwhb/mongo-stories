import { slugify } from '$lib/utils/slugify';
import type { ObjectId } from 'mongodb';

export default class Author {
	public slug: string;
	constructor(
		public firstName: string,
		public lastName: string,
		public penName: string,
		public intro?: string,
		public bio?: string,
		public image?: string,
		public thumbnail?: string,
		public socials?: [ObjectId],
		public _id?: ObjectId
	) {
		const fullName = firstName + ' ' + lastName;
		this.slug = slugify(fullName);
	}
}

