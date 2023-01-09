<script type="ts">
	import { PieceType } from '$lib/models/piece';
	import { enumToString, parseEnum } from '$lib/utils/format';

	const types = parseEnum(PieceType);
</script>

<div class="form-control mx-5 md:mx-auto max-w-80%">
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

<div class="">
	<div class="flex justify-self-stretch bg-slate-400">
		<div class="form-control">
			<label class="label" for="body">
				<span class="label-text">Body</span>
			</label>
			<textarea class="textarea textarea-bordered h-96" placeholder="Type here" id="body" />
		</div>
	</div>
	<div class="flex justify-self-stretch bg-red-400">
		<p>hello</p>
	</div>
</div>
