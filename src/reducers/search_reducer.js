export default function(state = {}, action) {
  switch(action.type) {
    case 'SAVE_COMPANY_NAME':
      return {...state, name: action.payload }
    case 'SAVE_COMPANY_LOCATION':
      return {...state, location: action.payload }
    case 'SAVE_SEARCH_RESULTS':
      return {...state, searchResults: action.payload }
    case 'SEARCH_FAIL':
      return {...state, isFailSearch: action.payload }
    default:
      return state;
  }
}
