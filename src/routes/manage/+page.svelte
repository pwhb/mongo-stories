<script>
	import { each } from 'svelte/internal';

	const menu = [
		{
			title: 'Songs',
			submenu: [
				{
					url: 'songs',
					name: 'songs'
				},
				{
					url: 'songs/add',
					name: 'add'
				}
			]
		},
		{
			title: 'Stories',
			submenu: [
				{
					url: 'songs/add',
					name: 'home'
				}
			]
		}
	];
	console.log(menu)
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
