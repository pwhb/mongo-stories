<script type="ts">
	import FileUpload from '$lib/components/file_upload.svelte';
	import { PieceType } from '$lib/models/piece';
	import { enumToString, parseEnum } from '$lib/utils/format';

	const types = parseEnum(PieceType);
</script>

<div class="form-control max-w-lg mx-auto">
	<FileUpload />
	<label class="label" for="title">
		<span class="label-text">Title</span>
	</label>
	<input type="text" placeholder="Type here" class="input input-bordered w-full" id="title" />
	<label class="label" for="subtitle">
		<span class="label-text">Subtitle</span>
	</label>
	<input type="text" placeholder="Type here" class="input input-bordered w-full" id="subtitle" />
	<label class="label" for="tags">
		<span class="label-text">Tags</span>
	</label>
	<input type="text" placeholder="Type here" class="input input-bordered w-full" id="tags" />
	<label class="label" for="type">
		<span class="label-text">Type</span>
	</label>
	<select class="select select-bordered" id="type">
		<option disabled selected>Choose a type</option>
		{#each types as type}
			<option value={type.id}>{type.toString}</option>
		{/each}
	</select>
</div>


