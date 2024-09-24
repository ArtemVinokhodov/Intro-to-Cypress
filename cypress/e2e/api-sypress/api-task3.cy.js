import "cypress-plugin-api";

describe("Tests Using Cypress API Plugin", () => {
    it.only("GET brands Using Cypress API Plugin", () => {
        cy.api({
            method: "GET",
            url: "/api/cars/brands",
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        }).should((response) => {
            expect(response.status).to.eq(200);
        });
    });


    it("GET models Using Cypress API Plugin", () => {
        cy.api("GET", "/api/cars/models").should((response) => {
            expect(response.status).to.eq(200);
        });
    });
    it("POST Create account Using Cypress API Plugin", () => {
        cy.api("POST", "/api/auth/signup/", {
            name: "A",
            lastName: "V",
            email: "12345asd@gmail.com",
            password: "Aaa123aaa",
            repeatPassword: "Aaa123aaa",
        }).should((response) => {
            expect(response.status).to.eq(201);
        });
        cy.api("DELETE", "/api/users/").should((response) => {
            expect(response.status).to.eq(200);
        });
    });
});

