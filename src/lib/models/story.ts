import { Schema, model } from "mongoose";

const storySchema: Schema = new Schema({
    title: { type: String },
    
    slug: { type: String },
    image: { type: String },
    thumbnail: { type: String },
    song: {
        type: Schema.Types.ObjectId,
        ref: "Song"
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    },
    body: {
        type: String
    }
})

const Story = model("Story", storySchema)

export default Story