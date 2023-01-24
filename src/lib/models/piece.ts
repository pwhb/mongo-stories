import { slugify } from '$lib/utils/slugify';
import type { ObjectId } from 'mongodb';

export enum PieceType {
	POEM,
	STORY,
	CHAPTER,
	NON_FICTION,
	JOKE,
	MISC
}

export default class Post {
	public slug: string
	constructor(
		public title: string,
		public finishedDate: Date,
		public type: string,
		public author: ObjectId,
		public body: string,
		public tags?: string[],
		public imageAlbum?: string[],
		public backgroundImagepublic?: string,
		public heroImagepublic?: string,
		public thumbnailpublic?: string,
		public subtitle?: string,
		public song?: ObjectId,
	) {
		this.slug = slugify(title);
	}
}


