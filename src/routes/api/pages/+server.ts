
import Social from '$lib/models/social';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    const socials = await Social.find()
    return json({ socials })
}

export const POST: RequestHandler = async ({ request }) => {
    const { url, icon, name } = await request.json()
    const social = await Social.create({ url, icon, name, })

    return json(social);
}