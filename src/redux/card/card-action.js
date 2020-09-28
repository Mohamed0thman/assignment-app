import CartActionTypes from './card-type';

const defaultCardData = {
  title: '',
  description: '',
  assignedTo: '',
};

export const createCard = (listId, cardData) => {
  const cardId = Date.now().toString();
  const card = {
    id: cardId,
    ...defaultCardData,
    ...cardData,
  };
  return {
    type: CartActionTypes.CARD_CREATE,
    payload: { card, listId, cardId },
  };
};

export const removeCard = (cardId, listId) => {
  return {
    type: CartActionTypes.CARD_DELETE,
    payload: { cardId, listId },
  };
};

export const assignCardToUser = (cardId, userId) => {
  return {
    type: CartActionTypes.ASSIGN_CARD_TO_USER,
    payload: {
      cardId,
      userId,
    },
  };
};
