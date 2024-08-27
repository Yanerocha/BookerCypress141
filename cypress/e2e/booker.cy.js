// bibliotecas / imports
import booking from '../fixtures/booking.json'

describe('Booker API', () => {

  before('Create Token', () => {
    cy.createToken()
  }); // termina before

  it('Create Booking', () => {
    cy.request({
      method: 'POST',
      url: '/booking',
      body: booking
    }).then(({ status, body}) => {
      expect(status).to.eq(200)
      Cypress.env('bookingid', body.bookingid)
      expect(body.booking.firstname).to.eq('Yane')
      expect(body.booking.lastname).to.eq('Rocha')
      expect(body.booking.totalprice).to.eq(400)
      expect(body.booking.depositpaid).to.eq(true)
      expect(body.booking.bookingdates.checkin).to.eq('2024-08-29')
      expect(body.booking.bookingdates.checkout).to.eq('2024-08-31')
      expect(body.booking.additionalneeds).to.eq('Breakfast')

    }) // termina cy
  }) // termina POST

}) // termina o describe