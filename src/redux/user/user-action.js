import UserActionTypes from './user-type';

const defaultUserData = {
  name: '',
  email: '',
};

export const createUser = (UserData) => {
  console.log('create');

  const userId = Date.now().toString();
  const user = {
    id: userId,
    ...defaultUserData,
    ...UserData,
  };
  return {
    type: UserActionTypes.USER_CREATE,
    payload: { user, userId },
  };
};
