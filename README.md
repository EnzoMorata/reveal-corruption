# Reveal Corruption

Personal project about an Information Visualization Tool focused on corruption cases in Chile. This project was born from my motivation to contribute to transparency, a relevant aspect of democracy. Additionally, it was created to serve as part of my portfolio. Therefore, this repository does not initially expect any code contributions. However, other forms of support, such as sharing new data sources to include in this project, are welcome.

This project is Open Source, so even if this repository is not expecting code-related Pull Requests, you can create a new project based on this one. For this, it is important to comply with the [GPL-3.0 license](./LICENSE.md). Also, please see the [License Compliance](#license-compliance) section for more details.

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
yarn build
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

## Data

This project use de following data sources:

- [Visualizador de datos sobre los casos de corrupción en Chile](https://github.com/bastianolea/corrupcion_chile): GitHub repository of an actual information visualization application about corruption in Chile, created by Bastián Olea Herrera. The data was copy into the directory [corrupcion_chile_bastian_olea](./src/data/original_data/corrupcion_chile_bastian_olea/). This application use the [GPL-3.0 license](./LICENSE.md), and as a result, *Reveal Corruption* uses the same license.


## License Compliance

The data from the [corrupcion_chile](https://github.com/bastianolea/corrupcion_chile) repository is used under the terms of the GPL-3.0 license. The GPL-3.0 license requires that any derivative works also be licensed under the GPL-3.0. Therefore, this project, *Reveal Corruption*, is distributed under the GPL-3.0 license. You can find a copy of the GPL-3.0 license in the [LICENSE.md](./LICENSE.md) file in this repository. For more information about the GPL-3.0 license, please visit the [official GPL website](https://www.gnu.org/licenses/gpl-3.0.html).
