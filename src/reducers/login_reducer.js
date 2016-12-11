export default function(state = {}, action) {
	switch(action.type) {
		case 'TEST':
			return {...state, ...action.payload}
		// case 'SAVE_USERNAME':
		// 	return {...state, state.login.username: action.payload };
		// case 'SAVE_PASSWORD':
		// 	return {...state, state.login.password: action.payload };
		default:
			return state;
	}
}
