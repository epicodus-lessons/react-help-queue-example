import ticketListReducer from './../../src/reducers/ticket-list-reducer';

describe('ticketListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

});
