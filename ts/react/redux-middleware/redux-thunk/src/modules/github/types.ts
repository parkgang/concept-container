import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AsyncState } from '../../lib/reducerUtils';

export type GithubAction = ActionType<typeof actions>;

// export type GithubState = {
//   userProfile: {
//     loading: boolean;
//     error: Error | null;
//     data: GithubProfile | null;
//   };
// };

export type GithubState = {
  userProfile: AsyncState<GithubProfile, Error>;
};
