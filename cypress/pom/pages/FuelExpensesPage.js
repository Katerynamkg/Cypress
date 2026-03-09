class FuelExpensesPage {

    //side bar button
    get sideBarButton(){
        return cy.get('[routerlink="expenses"]');
    }

    //click button
    get addAnExpenseButton(){
        return cy.contains('.btn-primary', 'Add an expense');
    }

    clickExpensesSideBarButton(){
        // return cy.get('[routerlink="expenses"]').click()
        this.sideBarButton.click();
    } 

    openAddAnExpenseForm(){
        // cy.get(addAnExpenseButton).click()
        this.addAnExpenseButton.click();
    }

    verifyIfExpenseAdded(){
        cy.get('.alert-success>p').contains('Fuel expense added').should('exist');
    }

    clickGarageSideBarButton(){
        cy.get('[routerlink="garage"]').click();
    }

}

export default new FuelExpensesPage;