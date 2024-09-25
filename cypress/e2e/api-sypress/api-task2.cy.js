/// <reference types="cypress" />
import { register, login, loginOut, openRegistrationForm } from '../cypress-assertions/credential.cy.js';

describe("Intercept test", () => {
    it("Profile - change Profile", () => {
        cy.intercept("GET", "/api/users/profile", {
            status: "ok",
            data: {
                name: "Polar",
                lastName: "Bear",
            },
        }).as("userProfile");
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
        login("12345asd@gmail.com", "Aaa123aaa");

        cy.get('.btn.btn-white.btn-sidebar.sidebar_btn.-profile').click();
        cy.get("h1").should("have.text", "Profile");

        cy.wait("@userProfile").its("response.body.data");
        cy.get('.profile_name').should("contain", "Polar Bear");
    });
});

