<script>
	import { getContext } from 'svelte';

	const { context } = getContext('appContext');
	const { hero } = context;
</script>

<div class="hero min-h-[80vh]" style={`background-image: url(${hero.heroImage});`}>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{hero.title}</h1>
			<p class="mb-5">
				{hero.subtitle}
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
