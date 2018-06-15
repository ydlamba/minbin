import {
  Action
} from '../actions';
import { DEFAULT_STATE, State } from '../constants';

export default (state: State = DEFAULT_STATE, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};