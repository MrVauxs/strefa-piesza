<script lang="ts">
	import type { Post } from '$lib/server/posts';
	export let post: Post;
</script>

<div class="flex">
	<a href={`blog/${post.slug}`} class="card card-hover overflow-hidden w-96 h-80 m-0.5">
		<header class="overflow-clip">
			<img
				loading="lazy"
				src={'images/' + post.preview}
				alt={post.title}
				class="w-full aspect-[21/9] object-cover object-top"
			/>
		</header>
		<section class="p-4 h2">{post.title}</section>
		<footer class="card-footer float-right">
			{post.date}
		</footer>
	</a>
</div>
