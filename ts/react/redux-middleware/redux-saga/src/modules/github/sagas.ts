import { getUserProfileAsync, GET_USER_PROFILE } from './actions';
import { getUserProfile, GithubProfile } from '../../api/github';
import { call, put, takeEvery } from 'redux-saga/effects';
import createAsyncSaga from '../../lib/createAsyncSaga';

// function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>) {
//   try {
//     // 프로미스를 만드는 특정 함수를 호출했을 경우 프로미스의 결과값에 대한 타입을 유추해내지 못합니다. 때문에 프로미스의 결과값은 force type 을 통해 타입을 지정해주어야 합니다.
//     const userProfile: GithubProfile = yield call(getUserProfile, action.payload);
//     yield put(getUserProfileAsync.success(userProfile));
//   } catch (e) {
//     yield put(getUserProfileAsync.failure(e));
//   }
// }

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
