# Livraria Virtual

Projeto desenvolvido como tarefa na IN Junior. É uma aplicação de livraria virtual com autenticação, navegação por gêneros e página de detalhes de cada livro.

## Sobre o projeto

O usuário acessa a plataforma por uma página de login com validação de e-mail e senha. Após autenticar, é redirecionado para a Home, onde vê um banner e a listagem de livros disponíveis. É possível navegar por gênero e acessar a página de detalhes de cada título.

O foco do projeto foi praticar roteamento com React Router, validação de formulários com Zod e React Hook Form, e organização de componentes com CSS Modules.

## Páginas

- **Login** — formulário de entrada com validação de e-mail e senha (mínimo 6 caracteres). Usa `react-hook-form` + `zod` para as regras de validação e exibe estado de carregamento durante o envio.
- **Home** — banner de destaque + listagem geral dos livros
- **Gêneros** (`/genre/:genero`) — filtra e exibe os livros pelo gênero selecionado
- **Detalhes** (`/details/:id`) — página individual de cada livro com suas informações completas

## Estrutura

```text
src/
├── paginas/
│   ├── login/
│   ├── home/
│   ├── generos/
│   └── sobre/
├── componentes/
│   ├── header/
│   ├── home/
│   ├── livros/
│   └── sobre/
├── router.tsx
└── App.tsx
```

## Como rodar

```bash
git clone https://github.com/marcosgomes-dev/Livraria-Virtual-_IN.git
cd Livraria-Virtual-_IN
npm install
npm run dev
```

Acesse em `http://localhost:5173`. Para fazer login, qualquer e-mail válido e senha com 6+ caracteres funcionam.

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router DOM v7
- React Hook Form + Zod
- Axios
- CSS Modules
