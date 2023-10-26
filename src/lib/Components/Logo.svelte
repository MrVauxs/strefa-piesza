<script>
	const string = 'Strefa Piesza';
</script>

<div class="wavy block break-words whitespace-normal text-surface-700-200-token">
	{#each string.split('') as letter, i}
		<span style="--i:{i + 1}">{letter}</span>
	{/each}
</div>

<style lang="scss">
	.wavy span {
		white-space: pre-wrap;
		display: inline-block;
		animation: flip 8s infinite;
		animation-delay: calc(0.5s * var(--i));
	}
	@keyframes flip {
		0%,
		80% {
			transform: rotateY(360deg);
		}
	}
</style>
