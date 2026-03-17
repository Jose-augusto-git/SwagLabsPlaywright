import { test as base } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
import { InventarioPage } from "../page/inventarioPage";

type MinhaFixtures = {
    loginPage: LoginPage;
    inventarioPage: InventarioPage;
    
};

export const test = base.extend<MinhaFixtures>({
    loginPage: async ({ page }, use) => {
        
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    inventarioPage: async ({ page }, use) => {
        
        const inventarioPage = new InventarioPage(page);
        await use(inventarioPage);
    },
});



export { expect } from '@playwright/test';

