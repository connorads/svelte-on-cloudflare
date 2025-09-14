<script lang="ts">
	import { Spring } from 'svelte/motion';
	import { getCounterValue, incrementCounter, decrementCounter } from './counter.remote';

	// Initialize the Spring with the current database value
	const counterQuery = getCounterValue();
	const count = new Spring(0);

	// Update the spring when we get the initial value
	$effect(() => {
		if (counterQuery.ready) {
			count.set(counterQuery.current);
		}
	});

	const offset = $derived(modulo(count.current, 1));

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}

	async function handleIncrement() {
		try {
			const newValue = await incrementCounter();
			count.set(newValue);
		} catch (error) {
			console.error('Failed to increment counter:', error);
		}
	}

	async function handleDecrement() {
		try {
			const newValue = await decrementCounter();
			count.set(newValue);
		} catch (error) {
			console.error('Failed to decrement counter:', error);
		}
	}
</script>

<div class="counter">
	<button onclick={handleDecrement} aria-label="Decrease the counter by one">
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5" />
		</svg>
	</button>

	<div class="counter-viewport">
		{#if counterQuery.loading}
			<div class="loading">Loading...</div>
		{:else if counterQuery.error}
			<div class="error">Error loading counter</div>
		{:else}
			<div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
				<strong class="hidden" aria-hidden="true">{Math.floor(count.current + 1)}</strong>
				<strong>{Math.floor(count.current)}</strong>
			</div>
		{/if}
	</div>

	<button onclick={handleIncrement} aria-label="Increase the counter by one">
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
		</svg>
	</button>
</div>

<style>
	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}

	.loading, .error {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		font-size: 1rem;
		color: var(--color-text);
	}

	.error {
		color: #ff6b6b;
	}
</style>
