export default function(state = {}, action) {
	switch(action.type) {
		case 'SAVE_USERNAME':
			return {...state, username: action.payload }
		default:
			return state;
	}
}
