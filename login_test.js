Feature('login');

Scenario('Login com sucesso', ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 360);
    I.fillField('#user', 'amanda123@amanda.com.br');
    I.fillField('#password', '123456');
    I.click('#btnLogin');
    I.waitForText('Login realizado', 3)
}).tag('@sucesso');

Scenario('Tentando logar digitando apenas o e-mail', ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 10);
    I.fillField('#user', 'amanda@amanda.com.br');
    I.click('#btnLogin');
    I.waitForText('Senha inválida', 3)
}).tag('@email')

Scenario('Tentando logar sem digitar e-mail e senha', ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 10);
    I.click('#btnLogin');
    I.waitForText('E-mail inválido', 3)
}).tag('@nada')

Scenario('Tentando logar digitando apenas a senha', ({ I }) => {
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 10);
    I.fillField('#password', '123456');
    I.click('#btnLogin');
    I.waitForText('E-mail inválido', 3)
}).tag('@senha')
