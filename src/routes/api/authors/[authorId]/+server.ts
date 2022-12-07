import Author from "$lib/models/author";
import { slugify } from "$lib/utils/slugify";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }) => {
    try {
        const { authorId } = params
        const author = await Author.findById(authorId)
        return json({ author });
    } catch (e) {
        console.log(e)
        throw error(400, "Error");
    }

}


export const PUT: RequestHandler = async ({ request, params }) => {
    try {
        const { firstName, lastName, penName, intro, bio, image, thumbnail } = await request.json()
        const fullName = firstName + " " + lastName
        const slug = slugify(fullName)
        const { authorId } = params
        const author = await Author.findByIdAndUpdate(authorId, { firstName, lastName, penName, intro, bio, slug, image, thumbnail }, { new: true })
        return json({ author });
    } catch (e) {
        console.log(e)
        throw error(400, "Error");
    }

}