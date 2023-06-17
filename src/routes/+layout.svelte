<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<div class="bg-surface-100-800-token shadow-xl">
			<AppBar class="container">
				<svelte:fragment slot="lead">
					<div class="flex items-center">
						<button class="btn btn-sm contents select-none">
							<img src="/sign.svg" alt="Strefa Piesza" class="h-8 icon" draggable={false} />
							<span>Strefa Piesza</span>
						</button>
					</div>
				</svelte:fragment>
			</AppBar>
		</div>
	</svelte:fragment>

	<slot />
</AppShell>

<style>
	.icon {
		transform: scale(1.75);
		padding: 0 1rem 0 0;
		filter: drop-shadow(1px 1px 2px rgb(0 0 0 / 0.4));
	}
</style>
