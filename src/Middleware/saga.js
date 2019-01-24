import { call, put, takeEvery, all, take, race, select, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../constants/constants.js'
import { getData, getFilteredData, getLoginData } from '../Api/api'
import * as actions from '../Actions/actions'
import 'regenerator-runtime/runtime'
import _ from 'lodash'

export function* fetchData() {
  try {
    const data = yield call(getData)
    yield put(actions.getDataSuccess(data))
  } catch (error) {
    yield put(actions.getDataFailure(error.message))
  }

}

export function* fetchFilteredData(action) {
  try {
    const data = yield call(getFilteredData, action.filterObj.key)
    yield put(actions.getFilteredDataSuccess(data))
    let totalHits = action.filterObj.totalHits;
    yield put(actions.setSearchHits( totalHits + 1)) 
  } catch (error) {
    yield put(actions.getFilteredDataFailure(error.message))
  }
}
export function* checkLoginData(action) {
  try {
  
    const data = yield call(getLoginData, action.username)
    yield put(actions.loginDataSuccess(data))
    
  } catch (error) {
    yield put(actions.loginDataFailure(error.message))
  }
}

//backgroundTask

export function* watchAndLog() {
  while (true) {
    const action = yield take('*')
    const state = yield select()
  }
}

export function* watchFetchAsync() {
  yield takeEvery(actionTypes.GET_DATA_REQUEST, fetchData)
  yield takeEvery(actionTypes.LOGIN_DATA_REQUEST, checkLoginData)
  yield takeLatest(actionTypes.GET_FILTERDDATA_REQUEST, fetchFilteredData)
}

export function* rootSaga() {
  yield all([watchFetchAsync(), watchAndLog()])
}
