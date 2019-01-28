import { combineReducers } from 'redux';
import { reducer } from './containers/BookApp/reducer';

export default function rootReducer(){
  return combineReducers({
    global:reducer
  })
}
