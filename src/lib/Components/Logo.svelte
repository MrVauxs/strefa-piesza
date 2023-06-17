<script>
	let string = 'Strefa Piesza';
</script>

<body>
	<div class="waviy">
		{#each string.split('') as letter, i}
			<span style="--i:{i + 1}">{letter}</span>
		{/each}
	</div>
</body>

<style lang="scss">
	.waviy span {
		display: inline-block;
		color: #fff;
		text-transform: uppercase;
		animation: flip 2s infinite;
		animation-delay: calc(0.1s * var(--i));
	}
	@keyframes flip {
		0%,
		80% {
			transform: rotateY(360deg);
		}
	}
</style>
