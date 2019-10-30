/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// get surveyresults
exports.optionMaker = (options) => {
  const opts = new Array();
  options.forEach((opt, index) => {
    const str = `\r\n${index + 1} = ${opt}`;
    opts.push(str);
  });
  return opts.join();
}

exports.optionPicker = (options, response) => {
  const opts = new Array();
  if (response.answer === 'skip') { return ['Not Applicable'] }
  else if (Array.isArray(response.answer)) {
    response.answer.forEach((opt, index) => {
      const str = `\r\n${opt} = ${options[opt - 1]}`;
      opts.push(str);
    });
    return opts;
  } else {
    return [`\r\n${response.answer} = ${options[response.answer - 1]}`];
  }
}

exports.optionPrettyify = (idx, question, response) => {
  if (response === 'skip') { return ['Not Applicable'] };
  if (response === true) { return ['Yes'] }
  if (response === false) { return ['No'] }
  if (idx === 0) {
    if (response === 2) { return ['2 = Spanish'] }
    else { return ['1 = English'] }
  } else {
    return [response]
  }
}

// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Some details about the site
exports.siteName = `Wildomar ATP SMS Survey!`;