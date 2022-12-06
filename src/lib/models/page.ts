import { Schema, model } from "mongoose";

const pageSchema: Schema = new Schema({
    heroImage: { type: String },
    heroTitle: { type: String },
    heroSubtitle: { type: String }
})

const Page = model("Page", pageSchema)

export default Page