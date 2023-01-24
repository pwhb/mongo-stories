import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions } from './$types';
import user from '$lib/models/user';
import { verify } from 'argon2';

import type { LayoutServerLoad } from '../../$types';
import dbConnect from '$lib/server/connectDB';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/auth');
	}
};

const login: Action = async ({ request, cookies }) => {
	const data = await request.formData();
	const { username, password } = Object.fromEntries(data);

	const invalid = { username: '', password: '' };
	const previous = { username };
	if (!username) {
		invalid.username = 'username cannot be empty';
	}
	if (!password) {
		invalid.password = 'password cannot be empty';
	}

	if (invalid.username || invalid.password) {
		return fail(400, { invalid, previous });
	}

	await dbConnect();

	const oldUser = await user.findOne({ username });
	if (!oldUser) {
		invalid.username = "user doesn't exist";
		return fail(400, { invalid, previous });
	}

	const isCorrect = await verify(oldUser.password, password as string);

	if (!isCorrect) {
		invalid.password = 'wrong password';
		return fail(400, { invalid, previous });
	}

	const { token } = await user.findByIdAndUpdate(
		oldUser._id,
		{ token: crypto.randomUUID() },
		{ new: true }
	);

	cookies.set('token', token, {
		httpOnly: true,
		path: '/',
		secure: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 // 1 day
	});

	throw redirect(303, '/auth');
};

export const actions: Actions = {
	default: login
};
