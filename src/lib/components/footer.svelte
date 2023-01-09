<script>
	import { getContext } from 'svelte';

	const { context, socials } = getContext('appContext');
	const { footer } = context;
</script>

<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
	<div>
		<div class="grid grid-flow-col gap-4">
			{#each socials as social}
				<a href={social.url} target="_blank" rel="noreferrer">
					<img
						src={social.icon}
						alt={social.name}
						class="w-8 p-1 md:w-12 md:p-2 rounded-full bg-gray-100"
					/>
				</a>
			{/each}
		</div>
	</div>
	<div>
		<p>{footer.title}</p>
		<p>{footer.subtitle}</p>
	</div>
</footer>
