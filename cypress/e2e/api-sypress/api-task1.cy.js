describe('Garage API tests', () => {
    const baseUrl = 'https://qauto.forstudy.space';
    let cookiesValue;
    let carId;

    before(() => {
        const userInfo = {
            "email": "12345asd@gmail.com",
            "password": "Aaa123aaa",
            "remember": false
        }

        cy.request({ method: 'POST', url: '/api/auth/signin', body: userInfo, failOnStatusCode: false }).then((response) => {
            const cookies = response.headers["set-cookie"][0];
            cookiesValue = cookies.split(';')[0];
            cy.log(JSON.stringify(cookiesValue));
        })
    });

    it('GET Garage - перевірка отримання списку автомобілів', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/api/cars/brands`,
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.be.an('array');
        });
    });

    it("POST Add a car and get carId", () => {
        const car = {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 122
        };
        cy.request({
            method: 'POST',
            url: `${baseUrl}/api/cars`,
            headers: { 'Cookie': cookiesValue },
            body: car
        }).then((response) => {
            expect(response.status).to.eq(201);
            carId = response.body.data.id;
            cy.log(`Car ID: ${carId}`);
        });
    });

    it('PUT Update car mileage', () => {
        const updatedCar = {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 555
        };

        cy.request({
            method: 'PUT',
            url: `${baseUrl}/api/cars/${carId}`,
            headers: {
                'Cookie': cookiesValue,
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: updatedCar,
            failOnStatusCode: false
        }).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
        });
    });

    it('DELETE Garage - Видалення автомобіля', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/api/cars/${carId}`,
            headers: { 'Cookie': cookiesValue },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
        });
    });
});