describe("Pizza Sipariş Formu", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/OrderPage");
    });

    it("İnputa metin giren test", () => {
        cy.get('[name="isim"]').type('Ada')
        cy.get('[name="isim"]').should('have.value', 'Ada')
    });

    it("3 karakterden kısa isim sipariş butonunu devre dışı bırakır", () => {
        cy.get('[name="boyut"][value="Orta"]').check()
        cy.get('[name="hamurKalinligi"]').select("İnce")

        const validIngredients = ["Pepperoni", "Domates", "Mısır", "Biber"];
        validIngredients.forEach((item) => {
            cy.get(`input[type="checkbox"][value="${item}"]`).check();
        });

        cy.get('[name="isim"]').type("Ad")
        cy.get(".siparis-ver-btn").should("be.disabled")
        cy.get('[name="isim"]').type("a")
        cy.get(".siparis-ver-btn").should("be.enabled")
    });

    it("birden fazla malzeme seçen test", () => {
        cy.get('[name="isim"]').type("Ada")
        cy.get('[name="boyut"][value="Orta"]').check()
        cy.get('[name="hamurKalinligi"]').select("İnce")

        const ingredients = ["Pepperoni", "Domates", "Mısır", "Biber"];
        ingredients.forEach((item) => {
            cy.get(`input[type="checkbox"][value="${item}"]`).check();
        });

        ingredients.forEach((item) => {
            cy.get(`input[type="checkbox"][value="${item}"]`).should("be.checked");
        });
        cy.get(".siparis-ver-btn").should("be.enabled")
    });

    it("3 malzeme seçilince sipariş verilemez", () => {
        cy.get('[name="isim"]').type("Ada")
        cy.get('[name="boyut"][value="Orta"]').check()
        cy.get('[name="hamurKalinligi"]').select("İnce")

        const ingredients = ["Pepperoni", "Domates", "Mısır"];
        ingredients.forEach((item) => {
            cy.get(`input[type="checkbox"][value="${item}"]`).check();
        });

        ingredients.forEach((item) => {
            cy.get(`input[type="checkbox"][value="${item}"]`).should("be.checked");
        });
        cy.get(".siparis-ver-btn").should("be.disabled")
    });

    it("11 tane malzeme seçilince sipariş verilemez", () => {
        cy.get('[name="isim"]').type("Ada")
        cy.get('[name="boyut"][value="Orta"]').check()
        cy.get('[name="hamurKalinligi"]').select("İnce")

        const ingredients = [
            "Pepperoni",
            "Sosis",
            "Kanada Jambonu",
            "Tavuk Izgara",
            "Soğan",
            "Domates",
            "Mısır",
            "Sucuk",
            "Jalepeno",
            "Sarımsak",
            "Biber",
        ];
        ingredients.forEach((item) => {
            cy.get(`input[type="checkbox"][value="${item}"]`).check();
        });

        ingredients.forEach((item) => {
            cy.get(`input[type="checkbox"][value="${item}"]`).should("be.checked");
        });
        cy.get(".siparis-ver-btn").should("be.disabled")
    });

    it("formu gönderince sipariş verisini POST eder", () => {
        cy.intercept("POST", "https://reqres.in/api/pizza", (req) => {
            req.reply({
                statusCode: 201,
                body: {
                    id: 1,
                    createdAt: "2026-11-28T00:00:00.000Z",
                    ...req.body,
                },
            });
        }).as("pizzaOrder");

        cy.get('[name="isim"]').type("Ada");
        cy.get('[name="boyut"][value="Orta"]').check();
        cy.get('[name="hamurKalinligi"]').select("İnce");

        const ingredients = ["Pepperoni", "Domates", "Mısır", "Biber"];
        ingredients.forEach((item) => {
            cy.get(`input[type="checkbox"][value="${item}"]`).check();
        });

        cy.get(".siparis-ver-btn").click();

        cy.wait("@pizzaOrder").then(({ request, response }) => {
            expect(request.body).to.deep.include({
                name: "Ada",
                size: "Orta",
                dough: "İnce",
                ingredients,
            });
            expect(response.statusCode).to.eq(201);
        });
    });
});
