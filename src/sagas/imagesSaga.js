import { call, put, select, takeEvery } from 'redux-saga/effects';
import { setError, setImages } from '../actions';
import { IMAGES } from '../constants';
import fetchImages from '../services/fetchImages';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
