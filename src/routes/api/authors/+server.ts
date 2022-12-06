import Author from '$lib/models/author';
import { slugify } from '$lib/utils/slugify';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    const authors = await Author.find()
    return json({ authors })
}

export const POST: RequestHandler = async ({ request }) => {
    const { firstName, lastName, penName, intro, bio, image, thumbnail } = await request.json()
    const fullName = firstName + " " + lastName
    const slug = slugify(fullName)
    const author = await Author.create({ firstName, lastName, penName, intro, bio, slug, image, thumbnail })

    return json(author);
}