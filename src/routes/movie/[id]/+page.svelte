<script>
	import MovieDetails from '../../../components/MovieDetails.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<MovieDetails movieDetails={data.movieDetails} />
