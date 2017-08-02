import {types} from './HomeActions';

let initialState = {
    userInfo: null,
    userList:null,
};


export default function (state = initialState, action) {
	const {payload, type, meta={}} = action;
	const {sequence={}} = meta;
	const pending = sequence.type === 'start';
	switch (type) {
		case types.USER_LOGIN:
		    if(payload&&payload.code===0){
                return {
                    ...state,
                    userInfo:payload.userInfo,
                };
            }
			return {
				...state,
			};

		default:
			return state;
	}
}
