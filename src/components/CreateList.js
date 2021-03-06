import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createList } from '../redux/list/list-action';

class CreateList extends Component {
  state = { title: '' };

  get isValid() {
    const { title } = this.state;
    return !!title;
  }

  get isInvalid() {
    return !this.isValid;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('create');

    const { createList } = this.props;

    if (createList) {
      createList(this.state);
    }

    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <form className="CreateList" onSubmit={this.handleSubmit}>
        <input
          className="CreateList-title"
          id="CreateList-title"
          name="title"
          onChange={this.handleChange}
          placeholder="New List Title"
          value={title}
        />
        <input
          className="CreateList-submit"
          type="submit"
          disabled={this.isInvalid}
        />
      </form>
    );
  }
}
const mapDispatchToProps = { createList };

export default connect(null, mapDispatchToProps)(CreateList);
