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
export class LoginPage {
  readonly page: Page;
  readonly campoUsuario: Locator;
  readonly campoSenha: Locator;
  readonly botaoLogin: Locator;
  readonly mensagemUsuarioSenhaInvalido: Locator;
  constructor(page: Page) {
    if (stryMutAct_9fa48("2")) {
      {}
    } else {
      stryCov_9fa48("2");
      this.page = page;
      this.campoUsuario = page.locator(stryMutAct_9fa48("3") ? "" : (stryCov_9fa48("3"), '#user-name'));
      this.campoSenha = page.locator(stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), '#password'));
      this.botaoLogin = page.locator(stryMutAct_9fa48("5") ? "" : (stryCov_9fa48("5"), '#login-button'));
      this.mensagemUsuarioSenhaInvalido = page.locator(stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), '.error-message-container'));
    }
  }
  async goto() {
    if (stryMutAct_9fa48("7")) {
      {}
    } else {
      stryCov_9fa48("7");
      await this.page.goto(URL);
      await expect(this.page).toHaveURL(URL);
    }
  }
  async login(usuario: string, senha: string) {
    if (stryMutAct_9fa48("8")) {
      {}
    } else {
      stryCov_9fa48("8");
      await this.campoUsuario.fill(usuario);
      await this.campoSenha.fill(senha);
      await this.botaoLogin.click();
    }
  }
  async verificarMensagemLoginInvalido(mensagemEsperada: string) {
    if (stryMutAct_9fa48("9")) {
      {}
    } else {
      stryCov_9fa48("9");
      // Verifica se o elemento está visível na tela
      await expect(this.mensagemUsuarioSenhaInvalido).toBeVisible();

      // Verifica se o texto do elemento é exatamente o esperado
      await expect(this.mensagemUsuarioSenhaInvalido).toHaveText(mensagemEsperada);
    }
  }
}