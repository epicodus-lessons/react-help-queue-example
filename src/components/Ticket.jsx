import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){
  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{displayTimeOpen(props.timeOpened)}</h4>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

function displayTimeOpen(timeOpened) {
  let now = new Moment(new Date());
  let then = new Moment(timeOpened);
  let stringTime = then.from(now, true);
  return stringTime;
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  timeOpened: PropTypes.instanceOf(Date).isRequired
};

export default Ticket;
