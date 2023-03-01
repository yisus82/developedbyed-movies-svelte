<script>
	/**
	 * @type {import('$lib/types').MovieDetails}
	 */
	export let movieDetails;
</script>

<div class="movie-details">
	<div class="image-container">
		<img
			src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
			alt={`Backdrop for ${movieDetails.title}`}
		/>
	</div>
	<div class="text-container">
		<h1>{movieDetails.title}</h1>
		<p class="overview">{movieDetails.overview}</p>
		<p>
			<span>Release date: </span>{movieDetails.release_date}<br />
			<span>Budget: </span>${movieDetails.budget}<br />
			<span>Rating: </span>{movieDetails.vote_average} / 10<br />
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
		width: 100%;
		border-radius: 1rem;
	}

	.movie-details {
		margin: 2rem 20%;
	}

	span {
		font-weight: bold;
	}
</style>
