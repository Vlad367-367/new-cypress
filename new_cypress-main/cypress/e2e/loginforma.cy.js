describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели валидный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели валидный пароль
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст верный
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик

})

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); // Нажали "забыли пароль"
        cy.get('#mailForgot').type('elhoffvlad@gmail.com'); // Ввели почту
        cy.get('#restoreEmailButton').click(); // Нажали отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик
})     

    it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели валидный логин
        cy.get('#pass').type('iLoveqastudio!'); // Ввели невалидный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик
})
    it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germand@olnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели валидный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик
})
    it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru'); // Ввели невалидный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели валидный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик
})
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с нижним и верхним регистром
        cy.get('#pass').type('iLoveqastudio1'); // Ввели валидный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст верный
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик
})
})
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 