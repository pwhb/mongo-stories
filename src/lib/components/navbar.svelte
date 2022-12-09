<script>
	import { showSearch, showSearchBar } from '$lib/store/common';

	// @ts-nocheck

	import { getContext } from 'svelte';
	import ThemeDropdown from './themeDropdown.svelte';

	const { context } = getContext('appContext');
	const {
		navbar: { themeDropdown, themeDropdownIcon, menu, title }
	} = context;

	function toggleSearchBar() {
		showSearchBar.update((val) => !val);
	}
</script>

<div class="navbar bg-base-100 shadow-xl">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#each menu as { url, name }}
					<li><a href={url}>{name}</a></li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a class="normal-case text-xl" href="/">{title}</a>
	</div>
	<div class="navbar-end">
		{#if $showSearch}
			<button class="btn btn-ghost btn-circle" on:click={toggleSearchBar}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/></svg
				>
			</button>
		{/if}

		<ThemeDropdown {themeDropdown} {themeDropdownIcon} />
	</div>
</div>
