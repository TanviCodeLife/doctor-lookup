# **Doctor Lookup**
####  Week2 JavaScript Independent Project at Epicodus, 01/18/2019
#### Tanvi Garg   

  ---
## Description
A JavaScript application that allows a user to view doctors in the Portland area that meet the user's search criteria by utilizing the BetterDoctor API.

  ---
## Table of Contents
  1. [Specifications](#specs-work)
  2. [Setup on OSX](#setup)
  2. [Technologies Used](#Tech-used)
  3. [Configuration/dependencies](#config-dep)
  4. [MIT License](#mit-lic)

  ---
## Specifications <a name="specs-work"></a>

| Behavior | Input | Output |
|----------|-------|--------|
|  Program takes a user's medical issue and recieve a list of doctors in Portland, OR area | User Input: Flu | List of Doctors that treat the User Input Medical Issue |
|   Program takes a user's input for a doctor name to receive a list of doctors in the Portland area that fit the search query| User Input: "SomeName" | A valid List Of Doctors is returned with information included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients  |
| Program takes a user's input for a doctor name and if query response doesn't include any doctors, then user should recieve a notification  hat states that no doctors meet the criteria.| User Input: "SomeName"  | "No Doctors available with SomeName in Portland, OR area" |
| Program's API call for a user query results in an error (any message not a 200 OK), the application should return a notification to user that states what the error is.|  User Query: Doctor Name | "There was an error processing your request"|
| Program's API call for a user query results in an error (any message not a 200 OK), the application should return a notification to user that states what the error is.|  User Query: "Flu" | "There was an error processing your request"|

 ---
## Setup on OSX <a name="setup"></a>

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Go to GitHub profile and clone the repo from [Doctor Lookup](https://github.com/TanviCodeLife/doctor-lookup.git). Use `git clone <project url>` command to pull it to a local repository in your Home directory.
*  Navigate to root of project directory
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

 ---
## Technologies Used <a name="Tech-used"></a>

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

---
## Configuration/Dependencies <a name="config-dep"></a>

  | Dependency                           | Description                                                                |
  | ------------------------------------ | -------------------------------------------------------------------------- |
  | babel-core v. 6.26.0                 | Babel compiler core                                                        |
  | babel-loaded v. 7.1.3                | Babel loader for webpack                                                   |
  | babel-present-es2015 v. 6.24.1       | Specifies how Babel can convert ES6 to ES5                                 |
  | clean-webpack-plugin v. 1.0.0       | Clean your build folder(s) before building                                 |
  | css-loader v. 2.1.0               | Interprets `@import` and `url()` like `import/require()` and resolves them |
  | eslint v. 4.18.2                     | Identifies and reports on patterns found in Javscript code                 |
  | eslint-loader v. 2.0.0               | ESLint loader for webpack                                                  |
  | html-webpack-plugin v. 3.2.0         | Simplifies creation of HTML files to serve webpack bundles                 |
  | jasmine v. 3.1.0                     | Allows Jasmine specs to be run                                             |
  | jasmine-core v. 2.99.0               | JavaScript BDD testing framework                                           |
  | karma v. 2.0.0                       | Allows the execution of JavaScript code in multiple *real* browsers        |
  | karma-chrome-launcher v. 2.2.0       | Launcher for Google Chrome, Google Chrome Canary, and Google Chromium      |
  | karma-cli v. 1.0.1                   | Use Karma from the command line                                            |
  | karma-jasmine v. 1.1.1               | Plugin - adapter for Jasmine testing framework                             |
  | karma-jasmine-html-reporter v. 0.2.2 | Dynamically shows test results at debug.html page                          |
  | karma-jquery v. 0.2.2                | Plugin - adapter for jQuery framework                                      |
  | karma-webpack v. 2.0.13              | Use webpack to preprocess files in Karma                                   |
  | style-loader v. 0.20.2               | adds CSS to the DOM by injecting a `<style>` tag                           |
  | uglifyjs-webpack-plugin v. 1.2.2     | Minifies JavaScript                                                        |
  | webpack v. 4.28.3                     | A module bundler used to bundle JavaScript files and additional resources   *Note - Remove carrot sign ^ in version number if webpack issues occur* |
  | webpack-cli v. 3.2.0                 | Use webpack from command line                                              |
  | webpack-dev-server v. 3.1.14          | Provides live reloading during development                                 |
  | css-loader 2.1.0 and style-loader 0.23.1        | renders images in DOM when `<img>` tag is used  |


---
## License <a name="mit-lic"></a>

This software is licensed under the MIT license.

Copyright (c) 2018 **Tanvi Garg**
