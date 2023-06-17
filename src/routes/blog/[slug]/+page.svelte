<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Strefa Piesza Blog - {data.post.title}</title>
</svelte:head>

<article>
	<header class="pb-4">
		<h1 class="h1 mb-0">{data.post.title}</h1>
		<hr class="my-2" />
		<i class="float-right">Opublikowane {data.post.date}</i>
	</header>
	<!-- render the post -->
	<div>
		<svelte:component this={data.component} />
	</div>
</article>
