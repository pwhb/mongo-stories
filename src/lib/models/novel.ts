import { slugify } from "$lib/utils/slugify"

type NovelParams = {
    firstName: string
    lastName: string
    penName: string
    intro?: string
    bio?: string
    image?: string
    thumbnail?: string
}

class Novel {
    firstName: string
    lastName: string
    penName: string
    intro?: string
    bio?: string
    slug: string
    image?: string
    thumbnail?: string

    constructor({ firstName, lastName, penName, intro, bio, image, thumbnail }: NovelParams) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.penName = penName;
        this.intro = intro;
        this.bio = bio;
        const fullName = firstName + " " + lastName
        this.slug = slugify(fullName)
        this.image = image
        this.thumbnail = thumbnail 

    }
}

export default Novel


// import { Schema, model } from "mongoose";

// const storySchema: Schema = new Schema({
//     title: { type: String },
//     slug: { type: String },
//     coverImage: { type: String },
//     pdfUrl: { type: String },
//     song: {
//         type: Schema.Types.ObjectId,
//         ref: "Song"
//     },
//     author: {
//         type: Schema.Types.ObjectId,
//         ref: "Novel"
//     },
// })

// const Story = model("Story", storySchema)

// export default Story