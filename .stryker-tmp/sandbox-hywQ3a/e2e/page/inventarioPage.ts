// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { Page, Locator, expect } from "@playwright/test";
import { URL } from "./urlPage";
export class InventarioPage {
  readonly page: Page;
  readonly botaoAddCarrinhoProduto1: Locator;
  readonly botaoAddCarrinhoProduto2: Locator;
  readonly contagemProdutoCarrinho: Locator;
  readonly botaoRemover: Locator;
  readonly botaoCarrinho: Locator;
  readonly selecionarProduto1: Locator;
  readonly campoSelecaoOrdencao: Locator;
  constructor(page: Page) {
    if (stryMutAct_9fa48("0")) {
      {}
    } else {
      stryCov_9fa48("0");
      this.page = page;
      this.botaoAddCarrinhoProduto1 = page.locator(stryMutAct_9fa48("1") ? "" : (stryCov_9fa48("1"), '#add-to-cart-sauce-labs-backpack'));
      this.botaoAddCarrinhoProduto2 = page.locator(stryMutAct_9fa48("2") ? "" : (stryCov_9fa48("2"), '#add-to-cart-sauce-labs-bike-light'));
      this.contagemProdutoCarrinho = page.locator(stryMutAct_9fa48("3") ? "" : (stryCov_9fa48("3"), '.shopping_cart_badge'));
      this.botaoRemover = page.locator(stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), '#remove-sauce-labs-backpack'));
      this.botaoCarrinho = page.locator(stryMutAct_9fa48("5") ? "" : (stryCov_9fa48("5"), '.shopping_cart_link'));
      this.selecionarProduto1 = page.locator(stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), '#item_4_title_link'));
      this.campoSelecaoOrdencao = page.locator(stryMutAct_9fa48("7") ? "" : (stryCov_9fa48("7"), '.product_sort_container'));
    }
  }
  async goto() {
    if (stryMutAct_9fa48("8")) {
      {}
    } else {
      stryCov_9fa48("8");
      await this.page.goto(URL);
      await expect(this.page).toHaveURL(URL);
    }
  }
  async validarContagemCarrinho(esperado: string) {
    if (stryMutAct_9fa48("9")) {
      {}
    } else {
      stryCov_9fa48("9");
      await expect(this.contagemProdutoCarrinho).toHaveText(esperado);
    }
  }
  async clicarBotaoAdicionarCarrinhoProduto1() {
    if (stryMutAct_9fa48("10")) {
      {}
    } else {
      stryCov_9fa48("10");
      await this.botaoAddCarrinhoProduto1.click();
    }
  }
  async clicarBotaoAdicionarCarrinhoProduto2() {
    if (stryMutAct_9fa48("11")) {
      {}
    } else {
      stryCov_9fa48("11");
      await this.botaoAddCarrinhoProduto2.click();
    }
  }
  async clicarBotaoRemoverProdutoCarrinho() {
    if (stryMutAct_9fa48("12")) {
      {}
    } else {
      stryCov_9fa48("12");
      await this.botaoRemover.click();
      await expect(this.contagemProdutoCarrinho).not.toBeVisible();
    }
  }
  async clicarBotaoCarrinho() {
    if (stryMutAct_9fa48("13")) {
      {}
    } else {
      stryCov_9fa48("13");
      await this.botaoCarrinho.click();
      await expect(this.page).toHaveURL(stryMutAct_9fa48("14") ? /.cart.html/ : (stryCov_9fa48("14"), /.*cart.html/));
    }
  }
  async clicarBotaoProduto1() {
    if (stryMutAct_9fa48("15")) {
      {}
    } else {
      stryCov_9fa48("15");
      await this.selecionarProduto1.click();
      await expect(this.page).toHaveURL(stryMutAct_9fa48("16") ? /.inventory-item\.html\?id=4/ : (stryCov_9fa48("16"), /.*inventory-item\.html\?id=4/));
    }
  }
  async selecionarOrdenacao() {
    if (stryMutAct_9fa48("17")) {
      {}
    } else {
      stryCov_9fa48("17");
      await this.campoSelecaoOrdencao.click();
      await this.campoSelecaoOrdencao.selectOption(stryMutAct_9fa48("18") ? "" : (stryCov_9fa48("18"), 'lohi'));
    }
  }
  async verificarOrdencacaoPrecoMenorParaMaior() {
    if (stryMutAct_9fa48("19")) {
      {}
    } else {
      stryCov_9fa48("19");
      const elementoPreco = await this.page.locator(stryMutAct_9fa48("20") ? "" : (stryCov_9fa48("20"), '.inventory_item_price')).allInnerTexts();
      const precoNumericos = elementoPreco.map(stryMutAct_9fa48("21") ? () => undefined : (stryCov_9fa48("21"), preco => parseFloat(preco.replace(stryMutAct_9fa48("22") ? "" : (stryCov_9fa48("22"), '$'), stryMutAct_9fa48("23") ? "Stryker was here!" : (stryCov_9fa48("23"), '')))));
      const precoEsperado = stryMutAct_9fa48("24") ? [...precoNumericos] : (stryCov_9fa48("24"), (stryMutAct_9fa48("25") ? [] : (stryCov_9fa48("25"), [...precoNumericos])).sort(stryMutAct_9fa48("26") ? () => undefined : (stryCov_9fa48("26"), (a, b) => stryMutAct_9fa48("27") ? a + b : (stryCov_9fa48("27"), a - b))));
      expect(precoNumericos).toEqual(precoEsperado);
      console.log(stryMutAct_9fa48("28") ? "" : (stryCov_9fa48("28"), 'Valores convertidos em número:'), precoNumericos);
    }
  }
}