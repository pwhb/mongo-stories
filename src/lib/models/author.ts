import { Schema, model } from "mongoose";

const authorSchema: Schema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    penName: { type: String },
    intro: { type: String },
    bio: { type: String },
    slug: { type: String },
    image: { type: String },
    thumbnail: { type: String }
})

const Author = model("Author", authorSchema)

export default Author