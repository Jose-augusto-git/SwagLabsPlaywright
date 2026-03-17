import { Page, Locator, expect } from "@playwright/test";
import { URL } from "../page/urlPage";

export class loginUsuarioSenha{

    readonly page: Page;
    readonly campoUsuario: Locator;
    readonly campoSenha: Locator;
    readonly botaoLogin: Locator;
   
    constructor(page: Page){
        this.page = page;
        this.campoUsuario = page.locator('#user-name');
        this.campoSenha = page.locator('#password');
        this.botaoLogin = page.locator('#login-button');
    }

    async goto(){
        await this.page.goto(URL);
        await expect(this.page).toHaveURL(URL);
    }

    async login(usuario: string, senha: string){
        await this.campoUsuario.fill(usuario);
        await this.campoSenha.fill(senha);
        await this.botaoLogin.click();
    }

}