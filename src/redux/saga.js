import {takeEvery, put} from 'redux-saga/effects';
import { USER_LIST, SET_USER_DATA } from './config';

function* userList(){
    const url = "https://dummyjson.com/users";
    let data = yield fetch(url)
    data = yield data.json();
    data = data.users;
    yield put({type: SET_USER_DATA, data})
    //console.warn("saga============================>", data.users); 
}

function* SagaData(){
    yield takeEvery(USER_LIST, userList)
}
export default SagaData