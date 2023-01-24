<script>
	import { page } from '$app/stores';
	console.log($page);
</script>

<h1>Auth</h1>

{#if $page.data.user}
	<p>Welcome {$page.data.user.username}</p>
	<form action="/logout" method="post">
		<button type="submit">Log out</button>
	</form>
{/if}
