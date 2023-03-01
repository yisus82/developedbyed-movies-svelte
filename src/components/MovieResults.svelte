<script>
	import MovieCard from './MovieCard.svelte';

	/**
	 * @type {import('$lib/types').Movie[]}
	 */
	export let movies = [];
</script>

<h1>Search Results</h1>

{#if movies.length > 0}
	<div class="movie-results">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
{:else}
	<p>There are no movies to display.</p>
{/if}

<style>
	h1 {
		padding: 0 1rem;
	}

	.movie-results {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem 2rem;
	}
</style>
