import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions } from './$types';
import user from '$lib/models/user';
import { hash } from 'argon2';

import type { LayoutServerLoad } from '../../$types';
import dbConnect from '$lib/server/connectDB';
import { slugify } from '$lib/utils/slugify';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/auth');
	}
};

const register: Action = async ({ request, cookies }) => {
	const data = await request.formData();
	const { username, password, confirmPassword } = Object.fromEntries(data);

	const invalid = { username: '', password: '' };
	const previous = { username };
	if (!username) {
		invalid.username = 'username cannot be empty';
	}
	if (!password) {
		invalid.password = 'password cannot be empty';
	}
	if (password !== confirmPassword) {
		invalid.password = 'passwords do not match';
	}

	if (invalid.username || invalid.password) {
		return fail(400, { invalid, previous });
	}

	await dbConnect();

	const oldUser = await user.findOne({ username });
	if (oldUser) {
		invalid.username = 'username already taken';
		return fail(400, { invalid, previous });
	}

	const hashedPassword = await hash(password as string);

	const { token } = await user.create({
		username,
		password: hashedPassword,
		slug: slugify(username as string),
		token: crypto.randomUUID()
	});

	cookies.set('token', token, {
		httpOnly: true,
		path: '/',
		secure: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 // 1 day
	});

	throw redirect(303, '/manage');
};

export const actions: Actions = {
	default: register
};
