import { Page, Locator, expect } from "@playwright/test";
import { URL } from "./urlPage";

export class LoginPage{
    readonly page: Page;
    readonly campoUsuario: Locator;
    readonly campoSenha: Locator;
    readonly botaoLogin: Locator;
    readonly mensagemUsuarioSenhaInvalido: Locator;

    constructor(page: Page){
        this.page = page;
        this.campoUsuario = page.locator('#user-name')
        this.campoSenha = page.locator('#password')
        this.botaoLogin = page.locator('#login-button')
        this.mensagemUsuarioSenhaInvalido = page.locator('.error-message-container')

    }

    async goto(){
        await this.page.goto(URL)
    }

    async login(usuario: string, senha: string){
        await this.campoUsuario.fill(usuario);
        await this.campoSenha.fill(senha);
        await this.botaoLogin.click();
    }

    async verificarMensagemLoginInvalido(mensagemEsperada: string) {
        // Verifica se o elemento está visível na tela
        await expect(this.mensagemUsuarioSenhaInvalido).toBeVisible();
        
        // Verifica se o texto do elemento é exatamente o esperado
        await expect(this.mensagemUsuarioSenhaInvalido).toHaveText(mensagemEsperada);
    }





}


