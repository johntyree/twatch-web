import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  SIGN_IN,
  SIGN_OUT
} from './types';
import streams from '../apis/streams';
import history from '../history';


export const signIn = ( userId ) => ({ type: SIGN_IN, payload: userId });
export const signOut = ( userId ) => ({ type: SIGN_OUT, payload: userId });


// TODO: Error handling...? Hello?

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const postData = { ...formValues, userId };
  const resp = await streams.post('/streams', postData);
  dispatch({ type: CREATE_STREAM, payload: resp.data });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

export const editStream = (id, formValues) => async dispatch => {
  const resp = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: resp.data });
  history.push('/');
};

export const fetchStream = id => async dispatch => {
  const resp = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: resp.data });
};

export const fetchStreams = () => async dispatch => {
  const resp = await streams.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: resp.data });
};

