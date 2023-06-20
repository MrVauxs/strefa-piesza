<script lang="ts">
	import type { PageServerData } from './$types';
	import Card from '$lib/Components/Card.svelte';

	export let data: PageServerData;

	function parseDates(date: string) {
		const array = date.split('.');
		if (array[2].length === 4) {
			let intermediateValue = array[0];
			array[0] = array[2];
			array[2] = intermediateValue;
		}
		return array.join('.');
	}
</script>

<svelte:head>
	<title>Strefa Piesza</title>
</svelte:head>

<div class="container h-full mx-auto justify-center items-center columns-xs">
	{#each data.posts
		.filter((d) => !d.draft)
		.filter((d) => d.preview) // Only with images
		.sort((b, a) => Date.parse(parseDates(a.date)) - Date.parse(parseDates(b.date))) as post}
		<Card {post} />
	{/each}
</div>
