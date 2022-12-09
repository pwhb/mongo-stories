<script type="ts">
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { setContext } from 'svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change'
	import '../app.css';

	export let data;
	onMount(() => {
		themeChange(false)
	})
	
	const socials = JSON.parse(data.socials);
	const context = JSON.parse(data.context);

	setContext('appContext', { socials, context });


</script>

<Navbar />
<slot />

<Footer />
