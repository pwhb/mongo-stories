import { getContext } from '$lib/controllers/contexts';
import { getSocials } from '$lib/controllers/socials';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const socials = await getSocials();
	const context = await getContext();
	console.log('Loaded data!!!');

	return {
		socials: JSON.stringify(socials),
		context: JSON.stringify(context),
		user: locals.user
	};
};
