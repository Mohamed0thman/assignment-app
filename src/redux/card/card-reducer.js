import { cards as defaultCard } from '../../normalized-state';
import { addEntity, removeEntity, addIdToChildren } from '../_utilities';
import CartActionTypes from './card-type';
import get from 'lodash/fp/get';

const cardReducer = (cards = defaultCard, action) => {
  if (action.type === CartActionTypes.CARD_CREATE) {
    const { card, cardId } = action.payload;
    return addEntity(cards, card, cardId);

    // return {
    //   entities: { ...cards.entities, [cardId]: card },
    //   ids: [...cards.ids, cardId],
    // };
  }
  if (action.type === CartActionTypes.CARD_DELETE) {
    const { cardId } = action.payload;
    return removeEntity(cards, cardId);
  }
  if (action.type === CartActionTypes.ASSIGN_CARD_TO_USER) {
    const { cardId, userId } = action.payload;
    return addIdToChildren(cards, cardId, 'assignedTo', userId);
  }
  return cards;
};

export default cardReducer;
