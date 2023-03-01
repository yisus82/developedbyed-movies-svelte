import { TMDB_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch, params }) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}?api_key=${TMDB_API_KEY}&language=en-US`
	);
	const data = await response.json();

	if (response.ok) {
		return {
			movieDetails: data
		};
	}
};
