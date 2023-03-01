<script>
	import { goto } from '$app/navigation';

	/** @type {string} */
	let searchValue;
</script>

<form class="search" on:submit|preventDefault={() => goto(`/movie?q=${searchValue}`)}>
	<input
		type="search"
		bind:value={searchValue}
		placeholder="Search..."
		required
		autocomplete="off"
	/>
	<button type="submit">🔍</button>
</form>

<style>
	form {
		display: flex;
		justify-content: flex-end;
	}

	input {
		width: 15vw;
		min-width: 150px;
		padding: 0.5rem;
		border: 3px solid #0080ff;
		border-radius: 0.7rem 0 0 0.7rem;
		color: #0080ff;
		font-weight: bold;
	}

	input::placeholder {
		font-weight: bold;
		color: #0080ff;
	}

	input:focus {
		outline: none;
	}

	button {
		border: none;
		border-radius: 0 0.7rem 0.7rem 0;
		padding: 0.5rem;
		background-color: #0080ff;
		color: white;
		font-size: 1.2rem;
		text-align: center;
		min-width: 50px;
		cursor: pointer;
	}
</style>
