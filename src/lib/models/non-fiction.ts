import { Schema, model } from "mongoose";

const nonFictionSchema: Schema = new Schema({
    title: { type: String },
    slug: { type: String },
    song: {
        type: Schema.Types.ObjectId,
        ref: "Song"
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    },
})

const NonFiction = model("NonFiction", nonFictionSchema)

export default NonFiction