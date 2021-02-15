/// <reference types="cypress" />

export function deleteBook(idBook) {
  return cy.request({
    method: 'DELETE',
    url: `Books/${idBook}`,
    failOnStatusCode: false
  })
}