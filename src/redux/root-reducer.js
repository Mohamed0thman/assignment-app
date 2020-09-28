import { combineReducers } from 'redux';

import lists from './list/list-reducer';
import cards from './card/card-reducer';
import users from './user/user-reducer';

export default combineReducers({
  lists,
  cards,
  users,
});
