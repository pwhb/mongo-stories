import { Schema, model } from "mongoose";

const socialSchema: Schema = new Schema({
    url: { type: String },
    icon: { type: String },
    name: { type: String },
})

const Social = model("Social", socialSchema)

export default Social