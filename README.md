# Teste Automatizado com CodeceptJS

Este repositório contém testes automatizados utilizando [CodeceptJS](https://codecept.io/), um framework de testes end-to-end que suporta múltiplos drivers, como Puppeteer, Playwright e WebDriver.

## 🚀 Configuração do Ambiente

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:

- **Node.js** v22.11.0
- **npm** ou **yarn**
- **Git** (opcional, para clonar o repositório)

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/amandadacroce/conhecendo-codeceptjs
   cd conhecendo-codeceptjs

2. Instale as dependências do projeto:
   ```bash
    npm install

📜 Como Rodar os Testes

Execute o seguinte comando para rodar todos os testes:
    ```bash
    npx codeceptjs run


Para rodar um teste específico execute o comando grep + a tag do teste:
   ```bash
npx codeceptjs run --grep '@sucesso'