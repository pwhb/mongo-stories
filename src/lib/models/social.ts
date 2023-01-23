import type { ObjectId } from 'mongodb';

export default class Social {
	constructor(
		public placement: number,
		public url: string,
		public icon: string,
		public name: string,
		public _id?: ObjectId
	) {}
}
