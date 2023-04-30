# E-Commerce RESTful API Service
![GET ALL][GET ALL]

## Table of contents
1. [Licensing](#licensing)
2. [Description](#description)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Packages](#packages)
6. [Features](#features)
7. [Resources](#resources)
8. [Tests](#tests)
9. [How to contribute](#how-to-contribute)
10. [Questions](#questions)
11. [Video Demonstration](#video-demonstration)
## Licensing

Refer to <https://choosealicense.com/> for licensing information
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

1. Application description: E-Commerce RESTful ORM API Service is a RESTful API that uses all of the CRUD methods on multiple different routes. The API was created using Sequelize and is able to dynamically update the website's contents including products, tags, and categories.
2. I built this app E-Commerce RESTful ORM API Service is designed to make it easier for a web developer to create, get, delete, and update products on a scalable level. 
3. This app The user no longer has to manually use MySql query language to update their database and can use sequelize and insomnia making it much easier and more efficient.

## Installation

To install this application a user must clone the repository at https://github.com/mhgarry/ecommerce_orm, install the package dependencies using the "npm i" command in Node.js, download/install/start Insomnia.rest, and then type in 'npm run seeds' to run the test seeds and after that 'npm start'. The application will then start and all routes will be fully functional.
 Refer to https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository for information on cloning a repository

## Usage
To use E-Commerce RESTful API Service a user must follow the installation instructions and then seed the database and use the 'npm run' command in their command line while inside the application's repository. Then the user can open "Insomnia", create a new route (get,pull, put, delete) and use the specified URL in the apiRoutes code (ex..'localhost:3001/api/tags/post'). For a 'GET' route insomnia will get all the database information for the specified URL. For a POST route the user changes the request body to "JSON" in "Insomnia" and then posts the object they'd like to add to the database. For a "PUT" route the user goes to the URL ID of the product, category, or tag they'd like to update and puts the data they'd like to replace in the request body "JSON" similarly to creating an object. For a "Delete" route a user simply has to run the URL that they want deleted in a "DEL" request to the Insomnia client and it will delete that data. More information about how to use this application can be found in my video demonstration.
![Seed][seed]
![Start Server][Start Server]

## Packages
- Node.js v18.16.00 
- NPM 9.6.5
- Sequelize 6.31.0
- Express 4.18.2
- Cli 1.0.1
- mysql2 3.2.4 


## Features

This application is able to test, update, create, delete, and get all CRUD routes from the E-commerce database it is connected to. This application is easily testable and usable with Insomnia and  performs all routes.
![GET][GET]
![Delete][Delete]
![POST][Post]
![PUT][PUT]
## Resources

I used Node.js, the NPM packages express, sequelize, nodemon, and dotenv, a mysql database, and the Insomnia.rest client.

## Tests
A user can test this application using Insomnia or any other API development platform. I used Insomnia to test the application and all of the routes I created for this application. 

## How to Contribute

Other developers can contribute to this project by cloning the repository https://github.com/mhgarry/ecommerce_orm and following github's contribution guidelines detailed here https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors
## Questions

For any further questions I'm available at mhgarry92@gmail.com
To view and clone this project's repository as well as view other projects I'm working on visit github.com/mhgarry
## Video Demonstration
https://watch.screencastify.com/v/Be6Z2OMq5IVIkyEq57C8

## sources
https://medium.com/geekculture/how-i-built-an-e-commerce-api-with-nodejs-express-and-mongodb-part-4-318e3f494611
https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
https://sequelize.org/docs/v6/core-concepts/model-basics/#:~:text=Models%20are%20the%20essence%20of,(and%20their%20data%20types).
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
https://dev.to/mcarpenter/sequelize-model-guide-5efk
https://dev.to/idmega2000/seeding-data-with-sequelize-1f3o
https://rupesh94.medium.com/how-to-create-a-model-and-do-the-migration-in-node-js-with-sequelize-js-419bb335999e
https://levelup.gitconnected.com/build-an-express-api-with-sequelize-cli-and-express-router-963b6e274561
https://www.bezkoder.com/node-js-express-sequelize-mysql/
https://medium.com/valtech-ch/setup-a-rest-api-with-sequelize-and-express-js-fae06d08c0a7
https://www.cloudnweb.dev/2019/08/building-rest-api-using-node-express-and-sequelize/
https://sequelize.org/docs/v6/core-concepts/model-querying-finders/


[seed]: images/database_seeding.png
[GET ALL]: images/get_all.png
[Start Server]: images/start_server.png
[GET]: images/get_all.png
[Delete]: images/delete.png
[Post]: images/post_request.png
[PUT]: images/put_request.png
