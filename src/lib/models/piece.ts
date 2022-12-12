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



class Piece {
	title: string;
	subtitle?: string;
	slug: string;
	tag: string[];
	finishedDate: Date;
	backgroundImage?: string;
	heroImage?: string;
	thumbnail?: string;
	imageAlbum: string[];
	type: string;
	song?: ObjectId;
	author: ObjectId;
	body: string;

	constructor({
		title,
		subtitle,
		tag,
		finishedDate,
		backgroundImage,
		heroImage,
		thumbnail,
		imageAlbum,
		type,
		song,
		author,
		body
	}: {
		title: string;
		subtitle?: string;
		tag: string[];
		finishedDate: Date;
		backgroundImage?: string;
		heroImage?: string;
		thumbnail?: string;
		imageAlbum: string[];
		type: string;
		song?: ObjectId;
		author: ObjectId;
		body: string;
	}) {
		this.title = title;
		this.subtitle = subtitle;
		this.tag = tag;
		this.finishedDate = finishedDate;
		this.backgroundImage = backgroundImage;
		this.slug = slugify(title);
		this.heroImage = heroImage;
		this.imageAlbum = imageAlbum;
		this.type = type;
		this.song = song;
		this.author = author;
		this.body = body;
		this.thumbnail = thumbnail;
	}
}

export default Piece;
