<script>
	let string = 'Strefa Piesza';
</script>

<div class="waviy">
	{#each string.split('') as letter, i}
		<span style="--i:{i + 1}">{letter}</span>
	{/each}
</div>

<style lang="scss">
	.waviy span {
		white-space: pre-wrap;
		display: inline-block;
		animation: flip 6s infinite;
		animation-delay: calc(0.2s * var(--i));
	}
	@keyframes flip {
		0%,
		80% {
			transform: rotateY(360deg);
		}
	}
</style>
