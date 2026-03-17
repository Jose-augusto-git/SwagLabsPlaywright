# 🛒 Swag Labs - Automação com Playwright 🎭

Este projeto contém a automação de testes E2E (End-to-End) do site [Swag Labs](https://www.saucedemo.com/) utilizando o framework **Playwright** com **TypeScript**.

A arquitetura do projeto utiliza o padrão **Page Object Model (POM)** integrado com **Fixtures** personalizadas para facilitar o acesso às páginas durante os testes.

## 🛠️ Tecnologias Utilizadas

- **Playwright**: Framework de automação E2E.
- **TypeScript**: Linguagem de programação.
- **Stryker Mutator**: Testes de mutação para garantir a qualidade dos testes.
- **Allure Report**: Relatórios detalhados de execução de testes.
- **GitHub Actions**: Integração Contínua (CI).

## 🚀 Arquitetura e Estrutura do Projeto

* `e2e/page/`: Contém as classes de Page Object (ex: `loginPage.ts`), que encapsulam os seletores de elementos e as interações com cada página do sistema.
* `e2e/fixtures/`: Contém as configurações de fixtures personalizadas (ex: `baseTest.ts`), que instanciam os Page Objects e os disponibilizam nativamente nos testes.
* `e2e/`: Diretório base onde ficam os arquivos de teste (ex: `login.spec.ts`, `inventario.spec.ts`).

## 🛠️ Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) com o NPM instalado em sua máquina.

## 📦 Instalação

1. Clone este repositório ou acesse a pasta do projeto pelo terminal:
   ```bash
   cd SwagLabsPlaywrightStrykerMutador
   ```
2. Instale as dependências executando:
   ```bash
   npm install
   ```
3. Instale os navegadores necessários para o Playwright:
   ```bash
   npx playwright install
   ```

## 🧪 Executando os Testes

**1. Rodar todos os testes em modo headless:**
```bash
npx playwright test
```

**2. Rodar os testes em modo UI (interativo):**
```bash
npx playwright test --ui
```

**3. Rodar os testes abrindo o navegador (headed):**
```bash
npx playwright test --headed
```

**4. Visualizar o relatório padrão do Playwright:**
```bash
npx playwright show-report
```

## 📊 Relatórios com Allure

Este projeto está configurado para gerar relatórios detalhados com o Allure Report.

1. **Gerar o relatório:**
   ```bash
   npx allure generate allure-results --clean -o allure-report
   ```
2. **Abrir o relatório:**
   ```bash
   npx allure open allure-report
   ```

## 📚 Casos de Teste

### Login (`login.spec.ts`)
* **CT01** - Informar usuário e senha válidos
* **CT02** - Informar usuário validado e senha inválida
* **CT03** - Informar usuário invalidado e senha válida
* **CT04** - Deixar os campos de usuário e senha em branco
* **CT05** - Informar usuário validado e não informar a senha
* **CT06** - Não informar o usuário e informar a senha correta

### Inventário (`inventario.spec.ts`)
* **CT01** - Clicar no botão "Add to cart" em um produto
* **CT02** - Clicar no botão "Remove" em um produto adicionado no carrinho
* **CT03** - Clicar em "Add to cart" em mais de um produto
* **CT04** - Adicionar um produto no carrinho e clicar no ícone do carrinho
* **CT05** - Clicar no nome de um produto
* **CT06** - Ordenar os produtos por preço (do menor para o maior)

## 👾 Testes de Mutação com Stryker

O **Stryker Mutator** é usado para avaliar a qualidade da suíte de testes inserindo bugs deliberados (mutantes).

**Para rodar os testes de mutação:**
```bash
npx stryker run
```

O relatório em HTML fica localizado em `reports/mutation/mutation.html`.

## ⚙️ Integração Contínua (CI)

O projeto possui um workflow configurado no **GitHub Actions** (`.github/workflows/playwright.yml`) que executa os testes automaticamente em cada `push` ou `pull_request` nas branches `main` e `master`.

