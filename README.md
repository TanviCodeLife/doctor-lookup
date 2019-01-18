# **Sample Readme**
####  Week1 JavaScript Independent Project at Epicodus, 01/12/2019
#### Tanvi Garg   

  ---
## Description
An application that determines a user’s age, lifespan and years left to live based on a planet’s solar years.

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
|  Program takes a user's date of birth and calculate Earth years.| User DOB= 1985-3-5, Planet: Mercury, Country Of Residence: United States, Activity Level: Medium, Gender: F | 33.86 Earth years |
|  Program takes a user's date of birth and converts to Mercury Years.| User DOB= 1985-3-5, Planet: Mercury, Country Of Residence: United States, Activity Level: Medium, Gender: F | 33.86 / .24 = 141.08 Mercury Yrs |
| Program takes a user's date of birth and converts to Venus Years. | User DOB= 1985-3-5, Planet: Venus, Country Of Residence: United States, Activity Level: Medium, Gender: F | 33.86 / .62 = = 54.61 Venus Yrs |
| Program takes a user's date of birth and converts to Mars Years. |  User DOB= 1985-3-5, Planet: Mars, Country Of Residence: United States, Activity Level: Medium, Gender: F  | 33.86 / 1.88 = 18.01 Mars Yrs |
| Program takes a user's date of birth and converts to Jupiter Years. |  User DOB= 1985-3-5, Planet: Jupiter, Country Of Residence: United States, Activity Level: Medium, Gender: F  | 33.86 / 11.86 = 2.85 Jupiter Years |
| Program takes a user's date of birth and gives life expectancy in Earth years based on country, gender and activity level. |  User DOB= 1985-3-5, Country Of Residence: United States, Activity Level: Medium, Gender: F  | Life Expectancy = 69 |
| Program takes a user's date of birth and gives life expectancy in selected planet's years. |  User DOB= 1985-3-5, Planet: Mercury, Country Of Residence: United States, Activity Level: Medium, Gender: F  | Life Expectancy = 288 Mercury Years |
| Program takes a user's date of birth and gives life expectancy in selected planet's years. |  User DOB= 1985-3-5, Planet: Venus, Country Of Residence: United States, Activity Level: Medium, Gender: F  | Life Expectancy = 111 Venus Years |
| Program takes a user's date of birth and gives life expectancy in selected planet's years. |  User DOB= 1985-3-5, Planet: Mars, Country Of Residence: United States, Activity Level: Medium, Gender: F  | Life Expectancy = 37 Mars Years |
| Program takes a user's date of birth and gives life expectancy in selected planet's years. |  User DOB= 1985-3-5, Planet: Jupiter, Country Of Residence: United States, Activity Level: Medium, Gender: F  | Life Expectancy = 6 Jupiter Years |
| Program takes a user's date of birth and calculates how many years a user has left to live selected planet based on life expectancy. |  User DOB= 1985-3-5, Planet: Mercury, Country Of Residence: United States, Activity Level: Medium, Gender: F| 146.92  Mercury Years Left to Live |
| Program takes a user's date of birth and calculates how many years a user has lived longer on a selected planet based on life expectancy. |  User DOB: 1930-1-1, Planet: Mercury, Country Of Residence: United States, Activity Level: High, Gender: F| 42 Mercury Years Over Life Expectancy |
 ---
## Setup on OSX <a name="setup"></a>

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Go to GitHub profile and clone the repo from [Super Galactic Age Calculator](https://github.com/TanviCodeLife/galactic-age-calculator-JS.git). Use `git clone <project url>` command to pull it to a local repository in your Home directory.
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
  | clean-webpack-plugin v. 0.1.18       | Clean your build folder(s) before building                                 |
  | css-loader v. 0.28.10                | Interprets `@import` and `url()` like `import/require()` and resolves them |
  | eslint v. 4.18.2                     | Identifies and reports on patterns found in Javscript code                 |
  | eslint-loader v. 2.0.0               | ESLint loader for webpack                                                  |
  | html-webpack-plugin v. 3.0.6         | Simplifies creation of HTML files to serve webpack bundles                 |
  | jasmine v. 3.1.0                     | Allows Jasmine specs to be run                                             |
  | jasmine-core v. 2.99.1               | JavaScript BDD testing framework                                           |
  | karma v. 2.0.0                       | Allows the execution of JavaScript code in multiple *real* browsers        |
  | karma-chrome-launcher v. 2.2.0       | Launcher for Google Chrome, Google Chrome Canary, and Google Chromium      |
  | karma-cli v. 1.0.1                   | Use Karma from the command line                                            |
  | karma-jasmine v. 1.1.1               | Plugin - adapter for Jasmine testing framework                             |
  | karma-jasmine-html-reporter v. 0.2.2 | Dynamically shows test results at debug.html page                          |
  | karma-jquery v. 0.2.2                | Plugin - adapter for jQuery framework                                      |
  | karma-webpack v. 2.0.13              | Use webpack to preprocess files in Karma                                   |
  | style-loader v. 0.20.2               | adds CSS to the DOM by injecting a `<style>` tag                           |
  | uglifyjs-webpack-plugin v. 1.2.2     | Minifies JavaScript                                                        |
  | webpack v. 4.19.1                     | A module bundler used to bundle JavaScript files and additional resources   *Note - Remove carrot sign ^ in version number if webpack issues occur* |
  | webpack-cli v. 2.0.9                 | Use webpack from command line                                              |
  | webpack-dev-server v. 3.1.0          | Provides live reloading during development                                 |
  | css-loader 0.28.10 and style-loader 0.20.2        | renders images in DOM when `<img>` tag is used  |


---
## License <a name="mit-lic"></a>

This software is licensed under the MIT license.

Copyright (c) 2018 **Tanvi Garg**
