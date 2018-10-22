import { LOAD_MESSAGES, ADD_MESSAGE } from '../actions/types';
import initialState from './initialState';

export default function messagesReducer(state = initialState.messages, action) {
  switch(action.type) {
    case LOAD_MESSAGES:
      return action.messages;
    case ADD_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
}
