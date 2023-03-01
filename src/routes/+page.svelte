<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovies from '../components/SearchMovies.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SearchMovies />
<PopularMovies movies={data.popular} />
