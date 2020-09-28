import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeCard } from '../redux/card/card-action';

import MoveCardToList from './MoveCardToList';
import CardAssignment from './CardAssignment';

class Card extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState((prevState) => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  handleChange = (event) => {
    const newListId = event.target.value;
    const { card } = this.props;

    this.props.onListChange(card, newListId);
  };

  render() {
    const {
      card = {},
      lists = [],
      list = {},
      listId,
      removeCard,
      users,
    } = this.props;
    const { showOptions } = this.state;
    const handleRemoveCard = () => removeCard(card.id, listId);

    return (
      <article className="Card">
        <h3>{card.title}</h3>
        <div className="Card-description">{card.description}</div>
        {showOptions && (
          <div className="Card-options">
            <CardAssignment card={card} />
            <MoveCardToList cardId={card.id} listId={listId} />
            <button onClick={handleRemoveCard} className="Card-remove danger">
              Remove Card
            </button>
          </div>
        )}
        <button className="Card-toggle" onClick={this.toggleOptions}>
          Toggle Options
        </button>
      </article>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards.entities[ownProps.cardId],
  };
};
const mapDispatchToProps = { removeCard };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
