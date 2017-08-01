/*
* @Author: Daniel Zhou
* @Date:   2016-09-20 18:01:23
* @Last Modified by:   Daniel Zhou
* @Last Modified time: 2016-09-27 19:24:41
*/
import { isFSA } from 'flux-standard-action';

function isPromise(val) {
	return val && typeof val.then === 'function';
}

export default function promiseMiddleware({ dispatch }) {
	return next => action => {
		if (!isFSA(action)) {
			return isPromise(action)
				? action.then(dispatch)
				: next(action);
		}
		const { meta = {}, payload } = action;

		if (isPromise(payload)) {
			dispatch({
				...action,
				payload: undefined,
				meta: {
					...meta,
					sequence: {
						type: 'start',
					}
				}
			});

			return payload.then(
				result => dispatch({
					...action,
					payload: result,
					meta: {
						...meta,
						sequence: {
							type: 'next',
						}
					}
				}),
				error => dispatch({
					...action,
					payload: error,
					error: true,
					meta: {
						...meta,
						sequence: {
							type: 'next',
						}
					}
				})
			);
		}

		return next(action);
	};
}
