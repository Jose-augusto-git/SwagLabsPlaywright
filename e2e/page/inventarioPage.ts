import { Page, Locator, expect } from "@playwright/test"
import { URL } from "./urlPage";


export class InventarioPage{

    readonly page: Page;
    readonly botaoAddCarrinhoProduto1: Locator;
    readonly botaoAddCarrinhoProduto2: Locator;
    readonly contagemProdutoCarrinho: Locator;
    readonly botaoRemover: Locator;
    readonly botaoCarrinho: Locator;
    readonly selecionarProduto1: Locator;
    readonly campoSelecaoOrdencao: Locator;
    
   
    constructor(page: Page){
        this.page = page;
        this.botaoAddCarrinhoProduto1 = page.locator('#add-to-cart-sauce-labs-backpack');
        this.botaoAddCarrinhoProduto2 = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.contagemProdutoCarrinho = page.locator('.shopping_cart_badge');
        this.botaoRemover = page.locator('#remove-sauce-labs-backpack')
        this.botaoCarrinho = page.locator('.shopping_cart_link')
        this.selecionarProduto1 = page.locator('#item_4_title_link')
        this.campoSelecaoOrdencao = page.locator('.product_sort_container')
      

    }

    async goto(){
        await this.page.goto(URL);
        await expect(this.page).toHaveURL(URL);

    }

    async validarContagemCarrinho(esperado: string){
        await expect(this.contagemProdutoCarrinho).toHaveText(esperado);
    }

    async clicarBotaoAdicionarCarrinhoProduto1(){
        await this.botaoAddCarrinhoProduto1.click();
    }

    async clicarBotaoAdicionarCarrinhoProduto2(){
        await this.botaoAddCarrinhoProduto2.click();
    }

    async clicarBotaoRemoverProdutoCarrinho(){
        await this.botaoRemover.click();
        await expect(this.contagemProdutoCarrinho).not.toBeVisible();
    }

    async clicarBotaoCarrinho(){
        await this.botaoCarrinho.click();
        await expect(this.page).toHaveURL(/.*cart.html/);
    }

    async clicarBotaoProduto1(){
        await this.selecionarProduto1.click();
        await expect(this.page).toHaveURL(/.*inventory-item\.html\?id=4/);

        
    }

    async selecionarOrdenacao(){
        await this.campoSelecaoOrdencao.click();
        await this.campoSelecaoOrdencao.selectOption('lohi');
        
    }

    async verificarOrdencacaoPrecoMenorParaMaior(){
        const elementoPreco = await this.page.locator('.inventory_item_price').allInnerTexts();

        const precoNumericos = elementoPreco.map(preco => parseFloat(preco.replace('$', '')))

        const precoEsperado = [...precoNumericos].sort((a,b) => a - b)

        expect(precoNumericos).toEqual(precoEsperado)
        console.log('Valores convertidos em número:', precoNumericos);
    }




























}