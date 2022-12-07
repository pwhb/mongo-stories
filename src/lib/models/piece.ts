import { Schema, model } from "mongoose";

export enum PieceType {
    POEM,
    STORY,
    CHAPTER,
    NON_FICTION,
    JOKE,
    MISC
}

const pieceSchema: Schema = new Schema({
    title: { type: String },
    subtitle: { type: String },
    slug: { type: String },
    tag: { type: [String], default: [] },
    finishedDate: { type: Date },
    backgroundImage: { type: String },
    heroImage: { type: String },
    thumbnail: { type: String },
    imageAlbum: {
        type: [String],
        default: []
    },
    type: {
        type: String,
    },
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
}, { timestamps: true })

const Piece = model("Piece", pieceSchema)

export default Piece