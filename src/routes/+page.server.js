import { TMDB_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch }) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
	);
	const data = await response.json();

	if (response.ok) {
		return {
			popular: data.results
		};
	}
};
