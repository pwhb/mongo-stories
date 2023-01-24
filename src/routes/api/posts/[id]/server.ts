
import { getDB } from "$lib/server/db";
import { POST_COLLECTION } from "$lib/utils/constants";
import { error, json, type RequestHandler } from "@sveltejs/kit";
import { ObjectId } from "mongodb";


export const GET: RequestHandler = async ({ params }) => {
    try {
        const { id } = params
        const db = await getDB()
        const social = await db.collection(POST_COLLECTION).findOne({ _id: new ObjectId(id) })
        return json({ message: "success", data: social }, { status: 200 });
    } catch (e) {
        console.log(e)
        throw error(400, "Error");
    }

}


export const PUT: RequestHandler = async ({ request, params }) => {
    try {
        const { id } = params;
        const keys = [
            "title",
            "artist",
            "audioUrl",
            "imageUrl",
            "youtubeUrl",
        ];
        const body = await request.json();
        const update: any = {};

        keys.forEach((key) => {
            if (body[key]) {
                update[key] = body[key];
            }
        });

        const db = await getDB();
        const { value } = await db
            .collection(POST_COLLECTION)
            .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: update }, { returnDocument: 'after' });
        return json({ message: 'updated', data: value }, { status: 201 });
    } catch (e) {
        console.log(e)
        throw error(400, 'Error');
    }

}