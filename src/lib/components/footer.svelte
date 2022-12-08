<script type="ts">
	import type Social from '$lib/models/social';
	export let socials: Social[];
</script>

<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
	<div>
		<div class="grid grid-flow-col gap-4">
			{#each socials as social}
				<a href={social.url} target="_blank" rel="noreferrer">
					<img src={social.icon} alt={social.name} class="w-8 p-1 md:w-12 md:p-2 rounded-full bg-gray-100" />
				</a>
			{/each}
		</div>
	</div>
	<div>
		<p>songs and strawberries (made with love and passion)</p>
	</div>
</footer>
