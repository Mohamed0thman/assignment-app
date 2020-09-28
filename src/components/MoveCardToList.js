import React from 'react';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';

import { moveCardToList } from '../redux/list/list-action';

const MoveCardToList = ({ listId, lists, moveCardToList }) => {
  return (
    <select className="Card-move" onChange={moveCardToList} value={listId}>
      {lists.map((list) => (
        <option value={list.id} key={list.id}>
          {list.title}
        </option>
      ))}
    </select>
  );
};

const getListEntities = (state) => state.lists.entities;

const getLists = createSelector([getListEntities], (lists) => {
  console.log('Generating an array of the lists');
  return Object.values(lists);
});

const mapStateToProps = (state) => {
  return {
    lists: getLists(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    moveCardToList(event) {
      const destinationListId = event.target.value;
      dispatch(
        moveCardToList(ownProps.cardId, ownProps.listId, destinationListId),
      );
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MoveCardToList);
