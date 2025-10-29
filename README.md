# 🛍️ React Products (Ecommerce) App

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) 
[![Vite](https://img.shields.io/badge/Vite-4.6.12-brightgreen?logo=vite)](https://vitejs.dev/) 
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.3-blue?logo=tailwind-css)](https://tailwindcss.com/) 
[![React Query](https://img.shields.io/badge/React%20Query-TanStack-red)](https://tanstack.com/query/latest) 
[![Zod](https://img.shields.io/badge/Zod-3.26.4-blue?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIElEQVQoU2NkYGD4z0AEYBxVSFDEMQYzUAhGDDzIEAAA6hAT/ay3EAAAAAElFTkSuQmCC)](https://zod.dev/)

---

🏗️ Arquitetura
Feature-Based: cada feature possui API, hooks, componentes, schemas e páginas

Lib/UI: componentes genéricos para Loading, Error, Spinner, etc

Query Client: configuração centralizada do TanStack Query

Suspense + Error Boundaries: UX elegante em carregamento e erros

## ✨ Features Principais

- Listagem de produtos com filtros de busca em tempo real  
- Validação de dados via **Zod**  
- Loading e Error States genéricos e reutilizáveis  
- Atualização automática a cada **1 minuto** usando **staleTime**  
- Arquitetura **feature-based** para escalabilidade  
- Design responsivo com **Tailwind CSS**  
- Suspense integrado para carregamento de páginas  

---

📁 Estrutura do Projeto


```
└── 📁 ecommerce-react-query
    ├── 📁 public
    │   └── 🖼️ vite.svg
    ├── 📁 src
    │   ├── 📁 assets
    │   │   └── 🖼️ react.svg
    │   ├── 📁 components
    │   │   ├── 📄 alert.tsx
    │   │   ├── 📄 error-state.tsx
    │   │   ├── 📄 loading-state.tsx
    │   │   └── 📄 spinner.tsx
    │   ├── 📁 features
    │   │   └── 📁 products
    │   │       ├── 📁 api
    │   │       │   └── 📄 getProducts.ts
    │   │       ├── 📁 components
    │   │       │   └── 📄 ProductList.tsx
    │   │       ├── 📁 hooks
    │   │       │   └── 📄 useProducts.ts
    │   │       ├── 📁 pages
    │   │       │   └── 📄 ProductsPage.tsx
    │   │       └── 📁 schemas
    │   │           └── 📄 productSchema.ts
    │   ├── 📁 lib
    │   │   ├── 📄 api.ts
    │   │   └── 📄 queryClient.ts
    │   ├── 📁 routes
    │   │   └── 📄 index.tsx
    │   ├── 🎨 App.css
    │   ├── 📄 App.tsx
    │   ├── 🎨 index.css
    │   └── 📄 main.tsx
    ├── ⚙️ .gitignore
    ├── 📝 README.md
    ├── 📄 eslint.config.js
    ├── 🌐 index.html
    ├── ⚙️ package-lock.json
    ├── ⚙️ package.json
    ├── ⚙️ tsconfig.app.json
    ├── ⚙️ tsconfig.json
    ├── ⚙️ tsconfig.node.json
    └── 📄 vite.config.ts
```

---

## 🎨 Componentes Genéricos

- **LoadingState**  
- **ErrorState**  
---

## ⚡ Tecnologias Usadas

| Tecnologia      | Propósito                                  |
|-----------------|-------------------------------------------|
| React 18        | Biblioteca para UI                         |
| TypeScript      | Tipagem estática                           |
| TanStack Query  | Fetching, caching e sincronização de dados|
| Zod             | Validação de schemas                       |
| Tailwind CSS    | Estilização responsiva                     |
| Vite            | Bundler rápido para desenvolvimento        |
| React Router 6  | Gerenciamento de rotas                      |

---

## 🚀 Rodando Localmente

1. Instalar dependências:

```bash
npm install

npm run dev
Acesse http://localhost:5173 no navegador.
