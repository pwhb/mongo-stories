import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

export interface ISong {
	title: string;
	artist: string;
	audioUrl: string;
	imageUrl?: string;
	youtubeUrl?: string;
}

const songSchema = new Schema<ISong>({
	title: { type: String, required: true },
	artist: { type: String, required: true },
	audioUrl: { type: String, required: true },
	imageUrl: { type: String, required: false },
	youtubeUrl: { type: String, required: false }
});

export default models.Song || model('Song', songSchema);
