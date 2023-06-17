<script lang="ts">
	import type { PageServerData } from './$types';
	import Card from '$lib/Components/Card.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Strefa Piesza</title>
</svelte:head>

<div class="container h-full mx-auto justify-center items-center columns-4 pt-4">
	{#each data.posts as post}
		<Card {post} />
	{/each}
</div>
