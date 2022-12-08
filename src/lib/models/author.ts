import { slugify } from "$lib/utils/slugify"

class Author {
    firstName: string
    lastName: string
    penName: string
    intro?: string
    bio?: string
    slug: string
    image?: string
    thumbnail?: string

    constructor({ firstName, lastName, penName, intro, bio, image, thumbnail }: {
        firstName: string
        lastName: string
        penName: string
        intro?: string
        bio?: string
        image?: string
        thumbnail?: string
    }) {
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

export default Author