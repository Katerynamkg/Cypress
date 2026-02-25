class SignInForm{
    get emailField(){
        return  cy.get("#signinEmail")
    }
     get passwordField(){
        return cy.get("#signinPassword")
     }
     get loginButton(){
        return cy.get(".modal-footer>.btn-primary")
     }

     enterEmail(email){
        this.emailField.type(email)
     }

     enterPassword(password){
        this.passwordField.type(password)
     }

     clickLoginButton(){
        this.loginButton.click()
     }

     loginWithCredentials(email, password){
        this.enterEmail(email)
        this.enterPassword(password)
        this.clickLoginButton()
     }
}

export default new SignInForm