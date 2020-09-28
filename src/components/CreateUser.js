import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createUser } from '../redux/user/user-action';

class CreateUser extends Component {
  state = { name: '', email: '' };

  handleSubmit = (event) => {
    event.preventDefault();

    const { createUser } = this.props;

    if (createUser) createUser(this.state);

    this.setState({ name: '', email: '' });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  get isValid() {
    const { name, email } = this.state;
    return name && email;
  }

  get isInvalid() {
    return !this.isValid;
  }

  render() {
    return (
      <form className="CreateUser" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="email"
        />
        <input type="submit" value="Create User" disabled={this.isInvalid} />
      </form>
    );
  }
}
// const mapDispatchToProps = { createUser };

export default connect(null, { createUser })(CreateUser);
