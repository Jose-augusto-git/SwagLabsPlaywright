import { test,expect } from './fixtures/baseTest';
import { URL } from './page/urlPage';

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
});
  

test('CT01 - Informar usuario e senha valido', async ({ loginPage,page }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/.*inventory.html/);

});

test('CT02 - Informar usuario validado e senha invalida',async ({loginPage}) => {
  await loginPage.login('standard_user','invalid_password');
  await loginPage.verificarMensagemLoginInvalido('Epic sadface: Username and password do not match any user in this service');
});

test('CT03 - Informar usuario invalidado e senha valida',async ({loginPage}) => {
  await loginPage.login('standard_user','invalid_password');
  await loginPage.verificarMensagemLoginInvalido('Epic sadface: Username and password do not match any user in this service');
});

test('CT04 - Deixar os campos de usuario e senha em branco',async ({loginPage}) => {
  await loginPage.login('','');
  await loginPage.verificarMensagemLoginInvalido('Epic sadface: Username is required');
});

test('CT05 - Informar usuario validado e nao informar a senha',async ({loginPage}) => {
  await loginPage.login('standard_user','');
  await loginPage.verificarMensagemLoginInvalido('Epic sadface: Password is required');
});

test('CT06 - Não informar o usuario e informar a senha correta',async ({loginPage}) => {
  await loginPage.login('','secret_sauce');
  await loginPage.verificarMensagemLoginInvalido('Epic sadface: Username is required');
});