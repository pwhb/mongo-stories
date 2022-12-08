import type { ObjectId } from "mongodb"

class Novel {
    title: string
    slug: string
    coverImage: string
    pdfUrl: string
    song: ObjectId
    author: ObjectId

    constructor({ title, slug, coverImage, pdfUrl, song, author }: {
        title: string,
        slug: string,
        coverImage: string,
        pdfUrl: string,
        song: ObjectId,
        author: ObjectId
    }) {
        this.title = title;
        this.slug = slug;
        this.coverImage = coverImage;
        this.pdfUrl = pdfUrl;
        this.song = song;
        this.author = author 
    }
}

export default Novel


