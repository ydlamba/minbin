import {
  Action,
  SET_INPUT,
  SET_TOOL,
} from '../actions';
import { DEFAULT_STATE, State } from '../constants';

export default (state: State = DEFAULT_STATE, action: Action): State => {
  switch (action.type) {
  	case SET_TOOL:
  		return {
  			...state,
  			input: null,
  			tool: action.tool,
  		};
  	case SET_INPUT:
  		return {
  			...state,
  			input: action.input,
  		}
    default:
      return state;
  }
};