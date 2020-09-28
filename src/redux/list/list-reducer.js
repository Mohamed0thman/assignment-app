import { lists as defaultLists } from '../../normalized-state';
import get from 'lodash/fp/get';

import {
  addIdToChildren,
  addEntity,
  removeEntity,
  removeIdFromChildren,
} from '../_utilities';
import ListActionTypes from './list-type';
import set from 'lodash/fp/set';

const listsReducer = (lists = defaultLists, action) => {
  if (action.type === ListActionTypes.CARD_CREATE) {
    const { listId, cardId } = action.payload;

    return addIdToChildren(lists, listId, 'cards', cardId);

    // const cards = lists.entities[listId].cards.concat(cardId);
    // return set(['entities', listId, 'cards'], cards, lists);

    //const entities = { ...lists.entities };
    // entities[listId] = {
    //   ...entities[listId],
    //   cards: entities[listId].cards.concat(cardId),
    // };

    // return {
    //   ...lists,
    //   entities,
    // };
  }
  if (action.type === ListActionTypes.CARD_DELETE) {
    const { cardId, listId } = action.payload;
    return removeIdFromChildren(lists, listId, 'cards', cardId);
  }
  if (action.type === ListActionTypes.LIST_CREATE) {
    const { list, listId } = action.payload;
    return addEntity(lists, list, listId);
  }
  if (action.type === ListActionTypes.REMOVE_LIST) {
    const { listId } = action.payload;
    return removeEntity(lists, listId);
  }
  if (action.type === ListActionTypes.MOVE_CARD_TO_LIST) {
    const { cardId, originListId, destinationListId } = action.payload;
    let newState = removeIdFromChildren(lists, originListId, 'cards', cardId);
    return addIdToChildren(newState, destinationListId, 'cards', cardId);
  }
  return lists;
};

export default listsReducer;
