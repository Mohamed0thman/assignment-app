import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createCard } from '../redux/card/card-action';

class CreateCard extends Component {
  state = {
    title: '',
    description: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  get isValid() {
    const { title, description } = this.state;
    return title && description;
  }

  get isInvalid() {
    return !this.isValid;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.isInvalid) return;

    const { createCard, listId } = this.props;

    if (createCard) {
      createCard(listId, this.state);
    }

    this.setState({
      title: '',
      description: '',
    });
  };

  render() {
    const { title, description } = this.state;

    return (
      <form className="CreateCard" onSubmit={this.handleSubmit}>
        <input
          className="CreateCard-title"
          onChange={this.handleChange}
          name="title"
          placeholder="Title"
          type="text"
          value={title}
        />
        <input
          className="CreateCard-description"
          onChange={this.handleChange}
          placeholder="Description"
          name="description"
          type="text"
          value={description}
        />
        <input
          className="CreateCard-submit"
          type="submit"
          value="Create New Card"
          disabled={this.isInvalid}
        />
      </form>
    );
  }
}
// const mapDispatchToProps = { createCard };

export default connect(null, { createCard })(CreateCard);

// const defaultCardData = {
//   title: '',
//   description: '',
//   asssignedTo: '',
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     createCard(listId, cardData) {
//       const cardId = Date.now().toString();
//       const card = {
//         id: cardId,
//         ...defaultCardData,
//         ...cardData,
//       };
//       dispatch({
//         type: 'CARD_CREATE',
//         payload: { card, listId, cardId },
//       });
//     },
//   };
// };
