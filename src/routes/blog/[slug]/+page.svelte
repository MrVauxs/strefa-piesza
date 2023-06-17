<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Strefa Piesza Blog - {data.post.title}</title>
</svelte:head>

<div>
	<article>
		<header>
			<h1>{data.post.title}</h1>
		</header>
		<!-- render the post -->
		<div>
			<svelte:component this={data.component} />
		</div>
	</article>
</div>
