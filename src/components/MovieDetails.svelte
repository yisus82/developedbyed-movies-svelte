<script>
	import NoPoster from '$lib/assets/no_poster.jpg';

	/**
	 * @type {import('$lib/types').MovieDetails}
	 */
	export let movieDetails;
</script>

<div class="movie-details">
	<div class="image-container">
		<img
			class={movieDetails.backdrop_path ? '' : 'poster'}
			src={movieDetails.backdrop_path
				? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
				: movieDetails.poster_path
				? `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
				: NoPoster}
			alt={`Backdrop for ${movieDetails.title}`}
		/>
	</div>
	<div class="text-container">
		<h1>{movieDetails.title}</h1>
		<p class="overview">{movieDetails.overview}</p>
		<p>
			<span>Release date: </span>{new Date(movieDetails.release_date).toLocaleDateString()}<br />
			<span>Budget: </span>{movieDetails.budget.toLocaleString(undefined, {
				style: 'currency',
				currency: 'USD'
			})}<br />
			<span>Rating: </span>{movieDetails.vote_average.toLocaleString()} / 10<br />
			<span>Runtime: </span>{movieDetails.runtime} minutes<br />
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 0.5rem 0rem;
	}

	p {
		padding: 0.5rem 0rem;
	}

	.image-container {
		width: 100%;
	}

	img {
		height: 50vh;
		border-radius: 1rem;
	}

	.poster {
		display: block;
		margin: 0 auto;
	}

	.movie-details {
		margin: 2rem 20%;
	}

	span {
		font-weight: bold;
	}
</style>
