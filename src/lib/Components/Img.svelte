<script lang="ts">
	export let src: string, alt: string;
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	const modal: ModalSettings = {
		type: 'alert',
		image: src
	};
</script>

<img
	{src}
	{alt}
	class="mx-auto"
	on:click={() => modalStore.trigger(modal)}
	on:keypress={() => modalStore.trigger(modal)}
/>
