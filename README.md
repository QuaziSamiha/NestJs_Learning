**24 Sep, 2025**

## commands:

```bash
# creating new module if nest cli globally installed
$ nest g module songs
```

```bash
# creating new module if nest cli globally not installed
$ npx nest g module songs
```

```bash
# creating new controller
$ npx nest g controller songs
```

- create get, put, post, delete endpoint in songs.controller.ts

- learn:
  - services are providers.
  - services are treated as dependency.
  - service is responsible for fetching data from the database and saving data to the database.
  - if you have to interact with the database you have to write source code inside the service.
  - service can be injected into the controller.
  - you can have multiple controller into the modules, you can inject the same service in these controllers.
  - you can also export the service from a current module and you can use that module that service into another module.
  - service are nothing more than a class.
  - injectable decorator.

```bash
# creating new service
$ npx nest g service songs
```

- learn:
  - injectable decorator.
  - providers could be factories, helper function
  - dependency injection

**25 Sept, 2025**

```bash
# creating new service
$ npm install class-validator class-transformer
```

- dto : data transfer object

```bash
# creating new service
$ npx nest --help
```

<!-- Documentation  -->

- A module serves as the foundational building block of a Nest.js application, adhering
  to the Nest.js principle of modularity for better code organization. Each Module
  encapsulates Providers (services), Controllers, Imports, and Exports, acting as a cohesive unit of
  related functionality.

- Providers in Nest.js are classes that act as services, factories, or repositories.
  They encapsulate business logic and can be injected into controllers or other
  services.

- Controllers serve the function of handling incoming HTTP requests and sending
  responses back to the client, aligning with the Nest.js use of the controller
  pattern for request handling.

- Imports is an array that specifies the external modules needed for the current
  module, enabling code reusability and separation of concerns.

- Exports are utilized to make services available to other modules, aligning with
  the Nest.js emphasis on encapsulation and modular design.

- Your application will contain a Root Module, which is specific to the Nest.js
  framework. The Root Module serves as the entry point and is responsible for
  instantiating controllers, providers, and other core elements of the application. In
  Nest.js, this architecture follows the “Module Isolation” principle, ensuring that the
  application is organized into distinct functional or feature-based modules.

![alt text](image.png)

- spotify application

- Divide your application’s use cases into feature modules, such as the Artist Module,
  Songs Module, and Auth Module. In Nest.js, modules are a fundamental organizational
  unit that follow the Modularization principle, enabling better code reusability and
  separation of concerns. This approach streamlines development, as modules
  encapsulate related functionalities and can be developed or maintained
  independently.

- Each Module will have its own providers, services, and controllers.
  Now it’s time to create a module. Create a songs module using nest cli
  `nest g module songs`
  A songs module will be created in your application. It will also add the SongsModule
  entry in AppModule

![alt text](image2.png)

Controllers in Nest.js are responsible for handling incoming requests and managing
the logic to send responses back to the client. They act as the “C” in the MVC
(Model-View-Controller) pattern that Nest.js leverages for application architecture.
In the context of building the backend of a Spotify-like application, let’s say you want
to fetch all songs by the artist Martin Garrix. The responsibility to handle this type of
request lies primarily with controllers, specific to this use case— the
SongsController.
Your browser will initiate a request to fetch all songs. In your Nest.js application,
you’ll handle this through the SongsController and its findAll method, which isspecifically designed to interact with underlying services to retrieve data and send it
back to the client.
Create these endpoints in the application.
GET http://localhost:3000/songs
GET http://localhost:3000/songs/1
POST http://localhost:3000/songs
PUT http://localhost:3000/songs/1
DELETE http://localhost:3000/songs/1
You can create a controller very easily. We are going to use the Nest cli to create a
controller
nest g controller songs
Have the SongsController inside the songs directory. Nestjs will also added the
entry for the SongsController in SongsModule.
Create these endpoints in the controller

@Controller("songs")
export class SongsController {
@Post()
create() {return "create a new song endpoint";
} @
Get()
findAll() {
return "find all songs endpoint";
} @
Get(":id")
findOne() {
return "fetch song on the based on id";
} @
Put(":id")
update() {
return "update song on the based on id";
} @
Delete(":id")
delete() {
return "delete a song on the based on id";
} } W
e’re sending simple messages to indicate that the route has been created. In Nest.js,
you can specify dynamic parameters id1 in your route by using a colon followed by
the parameter name, like @Get(':id'). This follows the Nest.js principle of utilizing
decorators to handle common HTTP tasks, streamlining the codebase and making it
more readable

## What is Service

Services in Nest.js are providers, meaning you can inject them into modules and
classes through dependency injection. In Nest.js, a service is not just a construct but
a first-class citizen, managed by the framework’s built-in Inversion of Control (IoC)
container. Unlike in Express.js, where middleware or simple JavaScript functionsoften serve the same purpose but without formal dependency management, Nest.js
services offer a structured way to write business logic, making the application more
maintainable and testable.

**20 Sept, 2025**

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
