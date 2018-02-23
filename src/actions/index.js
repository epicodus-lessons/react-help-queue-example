import constants from './../constants';
const { firebaseConfig, types } = constants;
import firebase from 'firebase';
import Moment from 'moment';


firebase.initializeApp(firebaseConfig);
const tickets = firebase.database().ref('tickets');

export function addTicket(_names, _location, _issue) {
  return () => tickets.push({
    names: _names,
    location: _location,
    issue: _issue,
    timeOpen: new Date().getTime()
  })
}

function receiveTicket(ticketFromFirebase) {
  return {
    type: types.RECEIVE_TICKET,
    ticket: ticketFromFirebase
  };
}

// function receiveDeletedTicket(ticketId) {
//   return {
//     type: types.RECEIVE_TICKET,
//     ticketId: ticketId
//   };
// }

export function watchFirebaseTicketsRef() {
  return function(dispatch) {

    tickets.on('child_added', data => {
      const newTicket = Object.assign(
        {},
        data.val(),
        {
          id : data.getKey(),
          formattedWaitTime: new Moment(data.val().timeOpen).from(new Moment())
        }
      );
      dispatch(receiveTicket(newTicket))
    });


  // THIS CODE WORKS BUT IS NOT CURRENTLY NECESSARY

  //   tickets.on('child_removed', data => {
  //     console.log('removed');
  //     console.log(data.getKey());
  //     dispatch(recieveDeletedTicket(data.getKey()));
  //   });
  }
}
