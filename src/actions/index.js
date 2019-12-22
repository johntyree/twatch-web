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


export const signIn = ( userId ) => ({ type: SIGN_IN, payload: userId });
export const signOut = ( userId ) => ({ type: SIGN_OUT, payload: userId });

export const createStream = formValues => async dispatch => {
  const resp = await streams.post('/streams', formValues);
  console.log('resp: ', resp);
  dispatch({ type: CREATE_STREAM, payload: resp.data });
};

export const deleteStream = id => async dispatch => {
  const resp = await streams.delete(`/streams/${id}`);
  console.log('resp: ', resp);
  dispatch({ type: DELETE_STREAM, payload: id });
};

export const editStream = (id, formValues) => async dispatch => {
  const resp = await streams.put(`/streams/${id}`, formValues);
  console.log('resp: ', resp);
  dispatch({ type: EDIT_STREAM, payload: resp.data });
};

export const fetchStream = id => async dispatch => {
  const resp = await streams.get(`/streams/${id}`);
  console.log('resp: ', resp);
  dispatch({ type: FETCH_STREAM, payload: resp.data });
};

export const fetchStreams = () => async dispatch => {
  const resp = await streams.get('/streams');
  console.log('resp: ', resp);
  dispatch({ type: FETCH_STREAMS, payload: resp.data });
};

