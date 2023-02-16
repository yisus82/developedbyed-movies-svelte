<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Home</h1>

{#if data.popular?.length > 0}
	<pre>{JSON.stringify(data.popular, null, 2)}</pre>
{:else}
	<p>There are no popular movies to display.</p>
{/if}
