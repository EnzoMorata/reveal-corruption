# reveal-corruption
Personal project about an Information Visualization Tool about corruption cases in Chile

## How to run the project

### Running with local installation
It is required have installed the [Yarn](https://yarnpkg.com/) package manager. To install all the dependencies needed run the command: 

```bash
yarn install
```

Then, you can use the application commands detailed below:

#### Application commands
- To run the application in dev mode, use the command:

```bash
yarn dev
```

-  To build the application for production, use the command:
```bash
yarn dev
```

This command generate all the files inside the [dist directory](./dist/).


### Running with Docker Compose
It is required to have [Docker and Docker Compose](https://www.docker.com/) installed. This option allows running a container with all the needed dependencies without installing them manually.

1. Start the container: 
Run the following command to start the container: 

```bash
docker compose up -d 
```

It is recommended to run it detached using the *-d* flag to run the next commands in the same terminal. Alternatively, it can be run it without detaching and use a second terminal.

2. Access the container terminal:
To run commands inside the container, first identify the *container name* or *ID* using:

```bash
docker container ls
```

Then, use the following command, replacing {container_name_or_id} with the actual container name or ID. This command runs an interactive bash terminal with the container:

```bash
docker exec -it {container_name_or_id} bash 
```

3. Run application commands:
Now it is possible to run the same commands described in the [section above](#application-commands). 

#### Notes
The Docker Compose file is configured to reflect changes in the app directory into the running container, allowing you to benefit from Vite's hot reload on file changes in development mode or generate production build.

4. Stop the container:
When finish to use the app, run the next command to stop the container:

```bash
docker compose down
```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
