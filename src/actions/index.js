import constants from './../constants';
const { firebaseConfig, types } = constants;
import firebase from 'firebase';


firebase.initializeApp(firebaseConfig);
const tickets = firebase.database().ref('tickets');

export function addTicket(_names, _location, _issue) {
  return () => tickets.push({
    names: _names,
    location: _location,
    description: _issue,
    timeOpened: new Date().getTime()
  })
}

export function subscribeToTickets() {
  return {
    type: types.SUBSCRIBE_TO_TICKETS
  };
}

function receiveTicket(ticketFromFirebase) {
  return {
    type: types.RECEIVE_TICKET,
    ticket: ticketFromFirebase
  };
}

export function getFirebaseTickets() {
  return function(dispatch) {
    tickets.on('child_added', data => {
      console.log('in subscribe:');
      console.log(data.val());
      dispatch(receiveTicket(data.val()))
    });
  }
}
