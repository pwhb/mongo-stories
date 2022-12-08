import { getSocials } from "$lib/controllers/socials";

export async function load() {
    const socials = await getSocials()
    return {
        socials: JSON.stringify(socials)
    };
}