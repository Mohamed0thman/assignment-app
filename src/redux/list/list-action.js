import ListActionTypes from './list-type';

const defaultListData = {
  cards: [],
  title: '',
};

export const createList = (listData) => {
  console.log('create');

  const listId = Date.now().toString();
  const list = {
    id: listId,
    ...defaultListData,
    ...listData,
  };
  return {
    type: ListActionTypes.LIST_CREATE,
    payload: { list, listId },
  };
};

export const removeList = (listId) => {
  console.log(listId);

  return {
    type: ListActionTypes.REMOVE_LIST,
    payload: { listId },
  };
};

export const moveCardToList = (cardId, originListId, destinationListId) => {
  return {
    type: ListActionTypes.MOVE_CARD_TO_LIST,
    payload: {
      cardId,
      originListId,
      destinationListId,
    },
  };
};
