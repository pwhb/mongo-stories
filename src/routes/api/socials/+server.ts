
import Social from '$lib/models/social';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ }) => {
    const socials = await Social.find().select({ _id: 0, placement: 1, url: 1, icon: 1, name: 1 }).sort({ placement: 1 })
    return json({ data: socials, total: socials.length })
}

export const POST: RequestHandler = async ({ request }) => {
    const { placement, url, icon, name } = await request.json()
    const social = await Social.create({ placement, url, icon, name, })

    return json(social);
}