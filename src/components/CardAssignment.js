import React from 'react';
import { connect } from 'react-redux';

import { assignCardToUser } from '../redux/card/card-action';

const CardAssignment = ({
  card = {},
  users = [],
  user = {},
  assignCardToUser = () => {},
}) => {
  const handleChange = (event) => {
    console.log('ss');
    const userId = event.target.value;
    if (assignCardToUser) assignCardToUser(card.id, userId);
  };

  return (
    <div className="CardAssignment" style={{ fontSize: '0.8em' }}>
      {card.assignedTo ? (
        <p>
          Card assigned to <strong>{user.name}</strong>.
        </p>
      ) : (
        <p>Card unassigned.</p>
      )}
      <select value={card.assignedTo} onChange={handleChange}>
        <option value="">(Unassigned)</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users.entities),
  };
};
const mapDispatchToProps = { assignCardToUser };

export default connect(mapStateToProps, mapDispatchToProps)(CardAssignment);
