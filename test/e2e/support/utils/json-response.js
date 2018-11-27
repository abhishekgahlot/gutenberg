/**
 * Internal dependencies
 */
import { getJSONResponse } from './get-json-response';

/**
 * Respond to a request with a JSON response.
 *
 * @param {string} mockResponse The mock object to wrap in a JSON response.
 * @return {Promise} Promise that responds to a request with the mock JSON response.
 */
export function JSONResponse( mockResponse ) {
	return async ( request ) => request.respond( getJSONResponse( mockResponse ) );
}
