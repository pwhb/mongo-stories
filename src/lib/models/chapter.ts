import { Schema, model } from "mongoose";

const chapterSchema: Schema = new Schema({
    title: { type: String },
    slug: { type: String },
    song: {
        type: Schema.Types.ObjectId,
        ref: "Song"
    }
})

const Chapter = model("Chapter", chapterSchema)

export default Chapter