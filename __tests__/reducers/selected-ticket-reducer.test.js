import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';

describe("selectedTicketReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedTicketReducer({}, { type: null })).toEqual({});
  });

});
