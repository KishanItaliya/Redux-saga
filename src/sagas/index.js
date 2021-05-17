import { takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants';

// watcher sagas -> actions -> worker sagas

function* hadleImagesLoad() {
    console.log('fetching images from unsplash.');
    // yield put({ type: 'ACTION_FROM_WORKER' });
}

// watcher sagas
function* rootSaga() {
    // yield takeEvery('HELLO', workerSaga);
    // yield take('LOGIN');
    // yield call(workerSaga);
    yield takeEvery(IMAGES.LOAD, hadleImagesLoad);
}

export default rootSaga;
