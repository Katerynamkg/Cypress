
describe('Login test', () => {
  it('should login', () => {
    cy.login('test-mail8@yopmail.com', 'Qwerty123');
  });
});
