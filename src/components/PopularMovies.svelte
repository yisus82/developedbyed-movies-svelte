<script>
	import Movie from './Movie.svelte';

	/**
	 * @type {import('$lib/types').Movie[]}
	 */
	export let movies = [];
</script>

<h1>Popular Movies</h1>

{#if movies.length > 0}
	<div class="popular-movies">
		{#each movies as movie}
			<Movie {movie} />
		{/each}
	</div>
{:else}
	<p>There are no popular movies to display.</p>
{/if}

<style>
	h1 {
		padding: 0 1rem;
	}

	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem 2rem;
	}
</style>
