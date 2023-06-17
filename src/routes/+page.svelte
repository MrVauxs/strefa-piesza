<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Strefa Piesza</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	{#each data.posts as post}
		<a href={`blog/${post.slug}`} class="card card-hover overflow-hidden">
			<header class="overflow-clip">
				<img
					loading="lazy"
					src={post.banner}
					alt={post.title}
					class="w-full aspect-[21/9] object-cover object-top"
				/>
			</header>
			<section class="p-4 h2">{post.title}</section>
			<footer class="card-footer float-right">
				{post.date}
			</footer>
		</a>
	{/each}
</div>
