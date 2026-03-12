# 🛒 Swag Labs - Automação com Playwright 🎭

Este projeto contém a automação de testes E2E (End-to-End) do site [Swag Labs](https://www.saucedemo.com/) utilizando o framework **Playwright** com **TypeScript**.
A arquitetura do projeto utiliza o padrão **Page Object Model (POM)** integrado com **Fixtures** personalizadas para facilitar o acesso às páginas durante os testes.

## 🚀 Arquitetura e Estrutura do Projeto

* `e2e/page/`: Contém as classes de Page Object (ex: `loginPage.ts`), que encapsulam os seletores de elementos e as interações com cada página do sistema.
* `e2e/fixtures/`: Contém as configurações de fixtures personalizadas (ex: `baseTest.ts`), que instanciam os Page Objects e os disponibilizam nativamente nos testes, evitando ter que criar `new Page(...)` em todo bloco de teste.
* `e2e/`: Diretório base onde ficam os arquivos de teste (ex: `login.spec.ts`).

## 🛠️ Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) com o NPM instalado em sua máquina.

## 📦 Instalação

1. Clone este repositório ou acesse a pasta do projeto pelo terminal caso já tenha baixado:
   ```bash
   cd SwagLabsPlaywright
   ```
2. Instale as dependências executando:
   ```bash
   npm install
   ```
3. Instale os navegadores necessários para o Playwright (Chromium, Firefox, WebKit):
   ```bash
   npx playwright install
   ```

## 🧪 Executando os Testes

Existem várias formas nativas e úteis de executar seus testes com o Playwright:

**1. Rodar todos os testes em modo headless (sem interface gráfica do navegador)**
```bash
npx playwright test
```

**2. Rodar os testes em modo UI (abre a interface interativa do Playwright, excelente para debug)**
```bash
npx playwright test --ui
```

**3. Rodar os testes abrindo o navegador visivelmente (headed)**
```bash
npx playwright test --headed
```

**4. Rodar apenas o arquivo de teste de Login**
```bash
npx playwright test e2e/login.spec.ts
```

**5. Visualizar o relatório gerado após a execução dos testes:**
```bash
npx playwright show-report
```

## 📚 Casos de Teste Estruturados (Login)

O arquivo `login.spec.ts` contempla os seguintes cenários validando a jornada completa de acesso:

* **CT01** - Informar usuário e senha válidos
* **CT02** - Informar usuário validado e senha inválida
* **CT03** - Informar usuário invalidado e senha válida
* **CT04** - Deixar os campos de usuário e senha em branco
* **CT05** - Informar usuário validado e não informar a senha
* **CT06** - Não informar o usuário e informar a senha correta

## Gif mostrando o teste realizado com sucesso

![12 03 2026_15 43 59_REC](https://github.com/user-attachments/assets/db3e80ec-bcbd-41c2-845d-36226c328acf)

