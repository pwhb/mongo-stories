<script>
	import { getContext } from 'svelte';
	const { context } = getContext('appContext');

	const menu = context.managePage;
</script>

<div class="hero min-h-[70vh]">
	<ul class="menu bg-base-100 w-56 mx-auto my-48 rounded-box">
		{#each menu as { title, submenu }}
			<li class="menu-title">
				<span>{title}</span>
			</li>
			{#each submenu as { url, name }}
				<li><a href={`manage/${url}`}>{name}</a></li>
			{/each}
		{/each}
	</ul>
</div>
