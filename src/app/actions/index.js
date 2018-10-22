import axios from 'axios';
import { LOAD_MESSAGES, ADD_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:3000';

function loadMessagesSuccess(messages) {
  return {
    type: LOAD_MESSAGES,
    messages
  };
}

function addMessageSuccess(message) {
  return {
    type: ADD_MESSAGE,
    message
  };
}

export function loadMessages() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/messages`)
      .then((response) => {
        dispatch(loadMessagesSuccess(response.data));
      });
  };
}

export function addMessage(message) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/messages`, message)
      .then((response) => {
        dispatch(addMessageSuccess(response.data));
      });
  };
}
