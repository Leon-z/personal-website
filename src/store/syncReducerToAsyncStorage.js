import {isFSA} from 'flux-standard-action';
import storageService from '../utils/storage';

const types = {
	SYNC_REDUCER_TO_STORAGE: 'SYNC_REDUCER_TO_STORAGE'
}

export default ({dispatch, getState}) => next => action => {
	if (!isFSA(action)) {
		return next(action);
	}

	const {meta={}, sequence={}, error, payload} = action;
	const {sync} = meta;

	if (action.type === types.SYNC_REDUCER_TO_STORAGE) {
		let state = getState();
		try {
			switch (payload) {
				default:
					storageService.set(payload, state[payload]);
			}
		}
		catch (err) {
			console.warn(err);
		}
	}


	if (!sync || sequence.type == 'start' || error) {
		return next(action);
	}


	next(action);


	setTimeout(()=> {
		dispatch({
			type: types.SYNC_REDUCER_TO_STORAGE,
			payload: sync
		});
	}, 0);
}
