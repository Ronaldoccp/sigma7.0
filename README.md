# SIGMA - Sistema de Gestão de Materiais

O SIGMA é um sistema de gestão de estoque e materiais desenvolvido para gerenciar e rastrear materiais utilizados por equipes de campo, permitindo controle de estoque, transferências entre equipes, gestão de reservas e relatórios detalhados.

## Funcionalidades Principais

### Gestão de Estoque e Materiais
- Relatório de necessidades de materiais por equipe
- Visualização de disponibilidade no almoxarifado
- Rastreamento de entrega de materiais às equipes
- Categorização de materiais (ativo, executado, em estoque)
- Registro de execução de materiais (baixa)

### Transferência de Materiais
- Transferência de materiais entre equipes
- Registro de equipe de origem e destino
- Registro do responsável pela transferência
- Histórico de transferências

### Reservas de Materiais
- Visualização detalhada de reservas
- Filtro por Empresa, Regional e Projeto
- Consulta por Centro de Custo ou Elemento PEP
- Busca por número de reserva

### Relatórios e Consultas
- Importação de dados do SAP financeiro
- Relatórios de equipes com materiais ativos
- Histórico de materiais por equipe
- Relatório comparativo de materiais executados

## Tecnologias Utilizadas

- React.js
- Tailwind CSS
- React Router
- React Table
- Chart.js
- Heroicons

## Instalação e Uso

1. Clone o repositório:
```
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```
cd sigma-gestao-materiais
npm install
```

3. Inicie a aplicação em modo de desenvolvimento:
```
npm start
```

A aplicação estará disponível em http://localhost:3000

## Estrutura do Projeto

```
sigma-gestao-materiais/
├── public/
├── src/
│   ├── components/
│   │   └── Layout/
│   │       ├── Header.js
│   │       ├── Layout.js
│   │       └── Sidebar.js
│   ├── pages/
│   │   ├── Dashboard.js
│   │   ├── EstoqueMateriais.js
│   │   ├── TransferenciaMateriais.js
│   │   ├── ReservasMateriais.js
│   │   ├── RelatoriosConsultas.js
│   │   └── NotFound.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
