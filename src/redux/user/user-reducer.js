import { users as defaultLists } from '../../normalized-state';
import UserActionTypes from './user-type';
import { addIdToChildren, addEntity } from '../_utilities';


const usersReducer = (users = defaultLists, action) => {
  if (action.type === UserActionTypes.USER_CREATE) {
    const { user, userId } = action.payload;
    return addEntity(users, user, userId);
  }

  return users;
};
export default usersReducer;
