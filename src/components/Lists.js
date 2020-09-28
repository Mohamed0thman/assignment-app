import React from 'react';
import { connect } from 'react-redux';


import List from './List';

const Lists = ({ lists = [] }) => {
  return (
    <section className="Lists">
      {lists.map((listId, i) => (
        <List key={i} listId={listId} />
      ))}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists.ids,
  };
};

export default connect(mapStateToProps)(Lists);
