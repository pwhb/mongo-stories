
import { getContext } from "$lib/controllers/contexts";
import { getSocials } from "$lib/controllers/socials";


export async function load() {
    const socials = await getSocials()
    const context = await getContext()
    console.log("Loaded data!!!")


    return {
        socials: JSON.stringify(socials),
        context: JSON.stringify(context)
    };
}