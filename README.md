# Arabica-Less : Using CoffeScript and Less with GruntJS

- [Less](https://github.com/less/less.js)
- [GruntJS](http://gruntjs.com/)
- [NodeJS](http://nodejs.org/)
- [UglifyJS](https://github.com/mishoo/UglifyJS)

## Getting Started

This project requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create/edit a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

## Description

This is a sample GruntJS project that unites Less and CoffeScript using GruntJS plugins.

Used GruntJS Plugins: uglify, coffee, clean, watch, less

## Usage

1. First things first: You will need [npm package manager](https://npmjs.org/) to install all dependencies. npm comes within NodeJS [since version 0.6.3](http://blog.nodejs.org/2011/11/25/node-v0-6-3/).

1. To install all NodeJS-Comffee dependencies, install NodeJS and then run `npm install`. This command will install all node_modules that are necessary to run this application.

1. With all dependencies installed, run the `grunt` command and have fun :)

## Project Structure

```js
- fonts   // Put your font files here
- images  // Put your image files here
- src 
  - coffee // Put your CoffeeScript files here
  - less  // Put your Less files here
```

If you want to get rid of your compiled files, run the command `grunt clean`.
