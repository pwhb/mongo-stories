<script>
	import { connectDB } from '$lib/db';
	import { onMount } from 'svelte';
	import '../app.css';
	onMount(async () => {
		await connectDB;
	});
</script>

<slot />
