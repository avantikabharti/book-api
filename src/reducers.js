import { combineReducers } from 'redux';
import { reducer } from './containers/BookApp/reducer';

export default combineReducers({
    global:reducer
  })
