import { test as base } from "@playwright/test";
import { LoginPage } from "../page/loginPage";

type MinhaFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<MinhaFixtures>({
    loginPage: async ({ page }, use) => {
        
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});

export { expect } from '@playwright/test';

