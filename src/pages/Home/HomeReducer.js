import {types} from './HomeActions';

let initialState = {
    articles:[],
    categories:[],
};


export default function (state = initialState, action) {
	const {payload, type, meta={}} = action;
	const {sequence={}} = meta;
	const pending = sequence.type === 'start';
	switch (type) {
		default:
			return state;
	}
}
