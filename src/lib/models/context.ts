import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

export interface IContext {}

const contextSchema = new Schema<IContext>({}, { timestamps: true, strict: false });

export default models.Context || model('Context', contextSchema);
