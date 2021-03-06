import { GET_SURVEYS } from '../actions/types';

//return the surveys when called
export default function(state = [], action) {
  switch (action.type) {
    case GET_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}
