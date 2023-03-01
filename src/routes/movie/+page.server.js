import { TMDB_API_KEY } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch, url }) => {
	const query = url.searchParams.get('q');

	if (!query) {
		throw redirect(302, '/');
	}

	const response = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}&language=en-US&page=1`
	);

	const data = await response.json();

	if (response.ok) {
		return {
			results: data.results
		};
	}
};
