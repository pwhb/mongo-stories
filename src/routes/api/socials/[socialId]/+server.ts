
import Social from "$lib/models/social";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }) => {
    try {
        const { socialId } = params
        const social = await Social.findById(socialId)
        return json({ social });
    } catch (e) {
        console.log(e)
        throw error(400, "Error");
    }

}


export const PUT: RequestHandler = async ({ request, params }) => {
    try {
        const { url, icon, name } = await request.json()
        const { socialId } = params
        const social = await Social.findByIdAndUpdate(socialId, { url, icon, name }, { new: true })
        return json({ social });
    } catch (e) {
        console.log(e)
        throw error(400, 'Error');
    }

}