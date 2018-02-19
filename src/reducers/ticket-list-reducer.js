export default (state = {}, action) => {
  let newState;
  const { names, location, issue, timeOpen, id, formattedWaitTime } = action;

  switch (action.type) {
  case 'ADD_TICKET':
    newState = Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;

  case 'UPDATE_TIME':
    if (state[id]){
      const ticket = state[id];
      const newTicket = Object.assign({}, ticket, { formattedWaitTime });
      newState = Object.assign({}, state, {
        [id]: newTicket
      });
      return newState;
    }

  default:
    return state;
  }
};
