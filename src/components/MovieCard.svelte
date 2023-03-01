<script>
	/**
	 * @type {import('$lib/types').Movie}
	 */
	export let movie;
	import NoPoster from '$lib/assets/no_poster.jpg';
</script>

<div class="movie-card">
	<a href={`/movie/${movie.id}`}>
		<img
			src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : NoPoster}
			alt={`Poster for ${movie.title}`}
		/>
	</a>
	<div class="description">
		<h2>{movie.title}</h2>
		<p>{new Date(movie.release_date).toLocaleDateString()}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
		max-width: 500px;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 0.9rem;
	}

	.description {
		height: 5vh;
	}

	p {
		font-size: 0.7rem;
	}

	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
