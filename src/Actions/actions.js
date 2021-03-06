import * as types from '../constants/constants.js'

export const getDataSuccess = (data) => ({ type: types.GET_DATA_SUCCESS, data })
export const getDataFailure = (message) => ({ type: types.GET_DATA_FAILURE, message })
export const getDataRequest = () => ({ type: types.GET_DATA_REQUEST })
export const loginDataSuccess = (data) => ({ type: types.LOGIN_DATA_SUCCESS, data })
export const loginDataFailure = (message) => ({ type: types.LOGIN_DATA_FAILURE, message })
export const loginDataRequest = (username) => ({ type: types.LOGIN_DATA_REQUEST,username })
export const setSearchKey = (searchKey) => ({ type: types.SET_SEARCH_KEY, searchKey })
export const setFilterKey = (filterKey) => ({ type: types.SET_FILTER_KEY, filterKey })
export const setSearchHits = (hits) => ({ type: types.SET_SEARCH_HITS, hits })
export const clearSearchHits = () => ({ type: types.CLEAR_SEARCH_HITS })
export const clearSearchKey = () => ({ type: types.CLEAR_SEARCH_KEY })
export const getFilteredDataSuccess = (data) => ({ type: types.GET_FILTERDDATA_SUCCESS, data })
export const getFilteredDataFailure = (message) => ({ type: types.GET_FILTERDDATA_FAILURE, message })
export const getFilteredDataRequest = (filterObj) => ({ type: types.GET_FILTERDDATA_REQUEST,  filterObj})
export const filterPlanetSearch = (filterText) => ({type:types.FILTER_PLANET_SEARCH,filterText})
