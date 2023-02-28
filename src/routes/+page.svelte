<script>
	import PopularMovies from '../components/PopularMovies.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<PopularMovies movies={data.popular} />
