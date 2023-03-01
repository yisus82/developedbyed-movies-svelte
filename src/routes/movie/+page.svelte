<script>
	import MovieResults from '../../components/MovieResults.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<MovieResults movies={data.results} />
