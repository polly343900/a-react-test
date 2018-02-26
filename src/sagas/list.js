import * as ACT from 'actions';
import {list} from '../mock/getList';
import {put, select, call, take, fork} from 'redux-saga/effects';

function requestList (){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(list)
        },1000);
    }).then(res => {
        return res;
    })
}

function* getList(){
    while(true){
        yield take(ACT.GET_LIST);
        
        const list = yield call(requestList);

        yield put({
            type: ACT.UPDATE_LIST,
            list
        })
    }
}
export default function* root() {
    yield fork(getList);
}