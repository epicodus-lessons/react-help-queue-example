import constants from './../constants';
const { types } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case types.SELECT_TICKET:
    return action.ticketId;
  default:
    return state;
  }
};
