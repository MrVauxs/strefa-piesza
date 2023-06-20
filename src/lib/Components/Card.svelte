<script lang="ts">
	import type { Post } from '$lib/server/posts';
	export let post: Post;
</script>

<a href={`blog/${post.slug}`} class="block relative card card-hover w-96 h-80 overflow-hidden">
	<img
		loading="lazy"
		src={'images/' + post.preview}
		alt={post.title}
		class="absolute h-80 w-96 object-cover object-top overflow-hidden"
	/>
	<div
		class="backdrop-blur-md bg-sky-900/50 text-white bottom-0 absolute w-full backdrop-grayscale"
	>
		<section class="p-4 h4">{post.title}</section>
		<footer class="card-footer text-right">
			{post.date ?? 'What'}
		</footer>
	</div>
</a>
