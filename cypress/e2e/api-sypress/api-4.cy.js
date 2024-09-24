// after(() => {
    //     cy.request({ method: 'GET', url: '/api/cars', failOnStatusCode: false }).then((response) => {
    //         // cy.log(JSON.stringify(response.body.data));
    //         expect(response.status).to.eq(200);
    //         expect(response.body.data.length).to.greaterThan(1);
    //         const cars = response.body.data;
    //         cars.forEach((car) => {
    //             cy.request({ method: 'DELETE', url: `/api/cars/${car.id}`, failOnStatusCode: false }).then((response) => {
    //                 cy.log(response.body)
    //                 expect(response.status).to.eq(200);
    //             })
    //         })

    //     })
    // })