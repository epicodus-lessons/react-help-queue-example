import React from 'react';
import PropTypes from 'prop-types';

function Admin(props){
  return (
    <div>
      <h2>This is the admin page!</h2>
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array
};

export default Admin;
