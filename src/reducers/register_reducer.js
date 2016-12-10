export default function(state = {}, action) {
	switch(action.type) {
		case 'TEST':
			return {...state, ...action.payload}
		default:
			return state;
	}
}
