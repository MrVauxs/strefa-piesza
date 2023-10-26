<script lang="ts">
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '../app.postcss';

	import Logo from '$lib/Components/Logo.svelte';
	import { AppBar, AppShell, LightSwitch, Modal } from '@skeletonlabs/skeleton';
</script>

<Modal />

<AppShell regionPage="hide-scrollbar">
	<svelte:fragment slot="pageHeader">
		<div class="bg-[url('/banner.webp')] w-full bg-cover shadow-xl mb-2 h-24 md:h-48 lg:h-56">
			<div
				class="bg-gradient-to-r dark:from-surface-800 from-surface-200 from-15% to-transparent h-full"
			>
				<AppBar class="container h-full flex justify-center" background="">
					<svelte:fragment slot="lead">
						<a href="/">
							<div class="flex items-center">
								<img
									src="/sign.svg"
									alt="Strefa Piesza"
									class="mx-2 mr-6 h-8 icon"
									draggable={false}
								/>
								<span class="h2 text-white"><Logo /></span>
							</div>
						</a>
					</svelte:fragment>
					<svelte:fragment slot="trail">
						<div class="drop-shadow-xl btn btn-sm">
							<LightSwitch />
						</div>
					</svelte:fragment>
				</AppBar>
			</div>
		</div>
	</svelte:fragment>

	<slot />
</AppShell>

<style>
	.icon {
		transform: scale(1.75);
		filter: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.4));
	}
</style>
