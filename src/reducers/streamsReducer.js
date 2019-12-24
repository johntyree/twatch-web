import _ from 'lodash';
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
  case CREATE_STREAM:
  case EDIT_STREAM:
  case FETCH_STREAM:
    return { ...state, [action.payload.id]: action.payload };
  case FETCH_STREAMS:
    return {...state, ..._.mapKeys(action.payload, stream => stream.id)}
  case DELETE_STREAM:
    return _.omit(state, action.payload)
  default:
    return state;
  };
};
