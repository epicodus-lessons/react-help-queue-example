import constants from './../constants';
const { types } = constants;
import { getFirebaseTickets } from './../actions';

export default (state = {}, action) => {
  let newState;
  const { names, location, issue, timeOpen, id, formattedWaitTime } = action;


  switch (action.type) {
    case types.RECEIVE_TICKET:
      newState = Object.assign({}, state);
      newState[action.ticket.id] = action.ticket;
      return newState;
    case types.ADD_TICKET:
      newState = Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          timeOpen: timeOpen,
          id: id,
          formattedWaitTime: formattedWaitTime
        }
      });
      return newState;

    case types.UPDATE_TIME:
      const newTicket = Object.assign({}, state[id], {formattedWaitTime});
      newState = Object.assign({}, state, {
        [id]: newTicket
      });
      return newState;

    default:
      return state;
  }
};
