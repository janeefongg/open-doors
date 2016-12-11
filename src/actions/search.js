export const saveCompanyName = (payload) => {
  return { type: 'SAVE_COMPANY_NAME', payload }
}

export const saveCompanyLocation = (payload) => {
  return { type: 'SAVE_COMPANY_LOCATION', payload }
}

export const postCompanySearch = (payload) => {
  return { type: 'POST_COMPANY_SEARCH', payload }
}

export const saveSearchData = (payload) => {
  return { type: 'SAVE_SEARCH_RESULTS', payload }
}
