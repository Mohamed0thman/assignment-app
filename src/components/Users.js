import React from 'react';
import { connect } from 'react-redux';

import CreateUser from './CreateUser';
import User from './User';

const Users = ({ users = [] }) => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUser />
      {users.map((userId) => (
        <User key={userId} userId={userId} />
      ))}
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.users.ids,
  };
};

export default connect(mapStateToProps)(Users);
