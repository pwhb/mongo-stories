import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

export interface ISocial {
	placement: number;
	url: string;
	icon: string;
	name: string;
}

const SocialSchema = new Schema<ISocial>({
	placement: { type: Number, required: true },
	url: { type: String, required: true },
	icon: { type: String, required: true },
	name: { type: String, required: true }
});

export default models.Social || model('Social', SocialSchema);
