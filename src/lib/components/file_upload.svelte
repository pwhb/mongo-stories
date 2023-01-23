<script>
	import { page } from '$app/stores';

	// @ts-ignore
	import Dropzone from 'svelte-file-dropzone';

	let files = {
		accepted: [],
		rejected: []
	};

	/**
	 * @type {{ name: any; type:any; }}
	 */
	let file;

	/**
	 * @param {{ detail: { acceptedFiles: any; fileRejections: any; }; }} e
	 */
	async function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;

		file = acceptedFiles[0];
		console.log('file', file);
		const { origin } = $page.url;
		const url = `${origin}/api/upload`;

		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': file.type
			},
			// @ts-ignore
			body: file
		});
		console.log('res', res);
		// files.accepted = [...files.accepted, ...acceptedFiles];
		// files.rejected = [...files.rejected, ...fileRejections];
	}
</script>

{#if file}
	<p class="text-center p-8 m-8 bg-purple-300">{file.name}</p>
{:else}
	<Dropzone text="hello" on:drop={handleFilesSelect}>Add Song</Dropzone>{/if}

<!-- <ol>
	{#each files.accepted as item}
		<li>{item.name}</li>
	{/each}
</ol> -->
