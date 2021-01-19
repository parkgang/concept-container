import { createReducer } from 'typesafe-actions';
import { GithubState, GithubAction } from './types';
import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR } from './actions';
import { asyncState } from '../../lib/reducerUtils';

// const initialState: GithubState = {
//   userProfile: {
//     loading: false,
//     error: null,
//     data: null,
//   },
// };

const initialState: GithubState = {
  userProfile: asyncState.initial(),
};

// const github = createReducer<GithubState, GithubAction>(initialState, {
//   [GET_USER_PROFILE]: (state) => ({
//     ...state,
//     userProfile: {
//       loading: true,
//       error: null,
//       data: null,
//     },
//   }),
//   [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//     ...state,
//     userProfile: {
//       loading: false,
//       error: null,
//       data: action.payload,
//     },
//   }),
//   [GET_USER_PROFILE_ERROR]: (state, action) => ({
//     ...state,
//     userProfile: {
//       loading: false,
//       error: action.payload,
//       data: null,
//     },
//   }),
// });

const github = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: (state) => ({
    ...state,
    userProfile: asyncState.load(),
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: asyncState.success(action.payload),
  }),
  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    userProfile: asyncState.error(action.payload),
  }),
});

export default github;
