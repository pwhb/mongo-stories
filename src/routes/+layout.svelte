<script>
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';


	export let data;
	console.log('data', data);
</script>

<slot />

<Footer />
