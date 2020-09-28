import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateCard from './CreateCard';

import { removeList } from '../redux/list/list-action';

import Card from './Card';

class List extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState((prevState) => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  //createCard = () => {};

  handelRemoveList = () => {
    const { listId, removeList } = this.props;
    console.log('list id', listId);
    removeList(listId);
  };

  render() {
    const { list = {} } = this.props;
    const { showOptions } = this.state;

    return (
      <article className="List">
        <h2>{list.title}</h2>
        {showOptions && (
          <div className="List-options">
            <CreateCard onCreateCard={this.createCard} listId={list.id} />
            <button
              className="List-remove danger"
              onClick={this.handelRemoveList}
            >
              Remove List
            </button>
          </div>
        )}
        <button
          className="List-toggle toggle-options"
          onClick={this.toggleOptions}
        >
          Toggle Options
        </button>
        <div>
          {list.cards.map((cardId, i) => (
            <Card cardId={cardId} key={i} listId={list.id} />
          ))}{' '}
          {/* Iterate over cards here. */}
        </div>
      </article>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { list: state.lists.entities[ownProps.listId] };
};

export default connect(mapStateToProps, { removeList })(List);
