// @ts-nocheck
import { test,expect } from './fixtures/baseTest';

test.beforeEach(async ({ inventarioPage }) => {
  await inventarioPage.goto();
});  

test('CT01 - Clicar no botão "Add to cart" em um produto', async ({ inventarioPage, loginPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.html/);

    await inventarioPage.clicarBotaoAdicionarCarrinhoProduto1();
    await inventarioPage.validarContagemCarrinho('1');

});

test('CT02 - Clicar no botão "Remove" em um produto adicionado no carrinho', async ({ inventarioPage, loginPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.html/);

    await inventarioPage.clicarBotaoAdicionarCarrinhoProduto1();
    await inventarioPage.validarContagemCarrinho('1');
    await inventarioPage.clicarBotaoRemoverProdutoCarrinho();

});

test('CT03 - Clicar em "add to cart" em mais de um produto', async ({ inventarioPage, loginPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.html/);

    await inventarioPage.clicarBotaoAdicionarCarrinhoProduto1();
    await inventarioPage.clicarBotaoAdicionarCarrinhoProduto2();
    await inventarioPage.validarContagemCarrinho('2');

});

test('CT04 - Adicionar um produto no carrinho, e clicar no icone do carrinho', async ({ inventarioPage, loginPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.html/);

    await inventarioPage.clicarBotaoAdicionarCarrinhoProduto1();
    await inventarioPage.validarContagemCarrinho('1');
    await inventarioPage.clicarBotaoCarrinho();
    

});


test('CT05 - Clicar no nome de um produto', async ({ inventarioPage, loginPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.html/);

    await inventarioPage.clicarBotaoProduto1();   

});

test('CT06 - Ordenar os produtos por preço (do menor para o maior)', async ({ inventarioPage, loginPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.html/);

    await inventarioPage.selecionarOrdenacao();   
    await inventarioPage.verificarOrdencacaoPrecoMenorParaMaior();

});