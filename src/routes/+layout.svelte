<script>
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';

	export let data;
	const socials = JSON.parse(data.socials);
</script>

<slot />

<Footer {socials} />
