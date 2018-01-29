import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <TicketList ticketList={props.ticketList} />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array
};

export default Admin;
