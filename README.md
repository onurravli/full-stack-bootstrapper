## Full Stack Bootstrapper

This template helps you to create a new full stack application seamlessly.

### Tech Stack

- TypeScript as programming language
- Node.js as runtime
- Express.js as web framework
- React.js as frontend library
- Tailwind CSS as CSS framework
- MongoDB as database
- Redis as caching layer
- Prettier as formatter
- Eslint as linter
- Jest as testing library
- Vercel as deployment service

### Getting Started

There are some steps to do before development.

1. Clone the repo.

```bash
git clone https://github.com/onurravli/full-stack-bootstrapper your-project-name
```

2. Change directory to the repo.

```bash
cd your-project-name
```

3. Install both backend and frontend dependencies.

```bash
pnpm run install:all # This will install both development, backend and frontend dependencies.
```

4. Set both backend and frontend environment variables.

```bash
cp packages/backend/.env.example packages/backend/.env
cp packages/frontend/.env.example packages/frontend/.env
```

5. Start the development server.

```bash
pnpm run dev:all
```

6. Or, start the production ready server.

```bash
pnpm run start:all
```

### License

Licensed under MIT license, for more see [LICENSE.md](./LICENSE.md) file.