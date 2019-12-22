import { CREATE_STREAM, SIGN_IN, SIGN_OUT } from './types';
import streams from '../apis/streams';

export const signIn = ( userId ) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = ( userId ) => {
  return {
    type: SIGN_OUT,
    payload: userId,
  };
};

export const createStream = formValues => async dispatch => {
  const resp = await streams.post('/streams', formValues);
  dispatch({
    type: CREATE_STREAM, payload: resp.data
  });
};
