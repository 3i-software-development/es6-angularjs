#!/usr/bin/env node

var path = require('path');

const postcss = require("postcss");
const atImport = require("postcss-import");
var cssvariables = require("postcss-css-variables");
var argv = require('minimist')(process.argv.slice(2));
var read = require('read-file-stdin');
var write = require('write-file-stdout');
const autoprefixer = require('autoprefixer');

var options = {
  input: path.resolve(argv._[0]),
  output: path.resolve(argv._[1])
};

read(options.input, function (err, buffer) {
  if (err) {
    console.error(err);
    console.error(err.stack);
  }
  var css = buffer.toString();

  try {
    css = postcss()
      .use(atImport({
        path: ["client", "client/assets/stylesheets"],
      }))
      .process(css, {
        // `from` option is needed here
        from: options.input
      })
      .then((result) => {
        const output = result.css
        css = postcss([cssvariables(/*options*/), autoprefixer(/*options*/)])
          .process(output).css;

        write(options.output, css);
      })
  } catch (err) {
    console.error(err);
    console.error(err.stack);
    console.error(css);

    write(options.output, css);
  }
});
