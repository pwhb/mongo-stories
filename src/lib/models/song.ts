import type { ObjectId } from 'mongodb';

export default class Song {
	constructor(
		public title: string,
		public artist: string,
        public audioUrl: string,
		public imageUrl?: string,
		public youtubeUrl?: string,
		public id?: ObjectId
	) {}
}
