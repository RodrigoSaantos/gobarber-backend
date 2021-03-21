<h2 align="center">
  <img alt="GoBarber" title="#GoBarber" src="public/assets/logo.svg" width="600"/>
</h2>

<h3 align="center">
  Express Application for GoBarber project
</h3>

<p align="center">The best way to schedule your service!</p>

<p align="center">
  <img alt="languages" src="https://img.shields.io/github/languages/count/RodrigoSaantos/gobarber-backend?color=%23FF9000">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/RodrigoSaantos/gobarber-backend?color=%23FF9000">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/RodrigoSaantos/gobarber-backend?color=%23FF9000">

  <a href="https://github.com/RodrigoSaantos/gobarber-backend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/RodrigoSaantos/gobarber-backend?color=%23FF9000">
  </a>

</p>

<p align="center"> Application developed in the bootcamp of Rocketseat GoStack#14 💻🚀 </p>

<p align="center">
 <a href="#objective">Objective</a> •
 <a href="#technologies">Technologies</a> •
 <a href="#usage">Usage</a> •
 <a href="#contribution">Contribution</a> •
 <a href="#author">Author</a> •
 <a href="#license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=GoBarber%20-%20EliasGcf&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEliasGcf%2Fgobarber-api%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<h2 id="objective" > 🎯 Objective </h2>

This api provides everything needed to organize appointments between the barbers and customers.

Customers can choose the best time available to them.

Providers can see all their appointments, manage the times, also see if one client canceled the schedule.

To see the **web client**, click here: [GoBarber Web](https://github.com/RodrigoSaantos/gobarber-web)<br />
To see the **mobile client**, click here: [GoBarber Mobile](https://github.com/RodrigoSaantos/gobarber-mobile)

<h2 id="technologies"> 🛠 Technologies </h2>

The following tools were used in the construction of the project:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

<h2 id="usage" > 👷 Usage </h2>

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/RodrigoSaantos/gobarber-backend.git && cd gobarber-backend
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn
# or
$ npm install

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

<h2 id="contribution"> 🤝 Contribution </h2>

This project is for study purposes too. All kinds of contributions are very welcome and appreciated!

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

<h2 id="author"> 💻 Author </h2>

<img style="border-radius: 50%;" src="https://github.com/RodrigoSaantos.png" width="100px;" alt="Rodrigo Santos"/>

By Rodrigo Santos 👋🏽 Find me:

[![Linkedin Badge](https://img.shields.io/badge/-RodrigoSantos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rodrigo-dos-santos-silva-637225156/)](https://www.linkedin.com/in/rodrigo-dos-santos-silva-637225156/)
|
[![Gmail Badge](https://img.shields.io/badge/-contato.rodrigosaantos@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:contato.rodrigosaantos@gmail.com)](mailto:contato.rodrigosaantos@gmail.com)

## 📝 License

This project is licensed under the MIT License

---
