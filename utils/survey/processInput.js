const checkAddress = require('./checkAddress')
const validate = require("validator/validator.js");

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

exports.processInput = async (survey, questions, input) => {
  var responseLength = survey.responses.length;
  var currentQuestion = questions.survey[responseLength];
  var questionResponse = {};

  if (responseLength === 0 && survey.participant === false) {
    survey.participant = true;
  } else if (currentQuestion.type === 'lang') {
    // Try and cast to a Number
    var num = Number(input);
    if (isNaN(num)) {
      if (survey.spanish === true) {
        return { 'Err': 'Algo salió mal. Por favor inténtelo de nuevo.' };
      } else {
        return { 'Err': 'Something went wrong. Please try again.' };
      }
    } else {
      if (num === 1) {
        survey.spanish = false;
        questionResponse.answer = num;
      } else if (num === 2) {
        survey.spanish = true;
        questionResponse.answer = num;
      } else {
        // don't update the survey response, return the same question
        if (survey.spanish === true) {
          return { 'Err': 'Algo salió mal. Por favor inténtelo de nuevo.' };
        } else {
          return { 'Err': 'Something went wrong. Please try again.' };
        }
      }
    }
  }
  else if (currentQuestion.type === 'boolean') {
    if (parseInt(input) === 1 || input.toLowerCase() === 'yes' || input.toLowerCase() === 'si' || input.toLowerCase() === 'sí') {
      questionResponse.answer = true;
    } else if (parseInt(input) === 2 || input.toLowerCase() === 'no') {
      questionResponse.answer = false;
    } else {
      if (survey.spanish === true) {
        return { 'Err': 'Algo salió mal. Por favor inténtelo de nuevo.' };
      } else {
        return { 'Err': 'Something went wrong. Please try again.' };
      }
    }
  }
  else if (currentQuestion.type === 'txt') {
    questionResponse.answer = input;
    // var num = Number(input);
    // if (isNaN(num)) {
    //   if (survey.spanish === true) {
    //     return { 'Err': 'Algo salió mal. Por favor proporcione un número válido.' };
    //   } else {
    //     return { 'Err': 'Something went wrong. Please provide a valid number.' };
    //   }
    // } else {
    //   questionResponse.answer = num;
    // }
  }
  else if (currentQuestion.type === 'num') {
    var num = Number(input);
    if (isNaN(num)) {
      if (survey.spanish === true) {
        return { 'Err': 'Algo salió mal. Por favor proporcione un número válido.' };
      } else {
        return { 'Err': 'Something went wrong. Please provide a valid number.' };
      }
    } else {
      questionResponse.answer = num;
    }
  }
  else if (currentQuestion.type === 'single') {
    var num = Number(input);
    if (isNaN(num)) {
      if (survey.spanish === true) {
        return { 'Err': 'Algo salió mal. Por favor proporcione un número válido.' };
      } else {
        return { 'Err': 'Something went wrong. Please provide a valid number.' };
      }
    } else if (num < 1 || num > currentQuestion.options.length) {
      if (survey.spanish === true) {
        return { 'Err': 'Algo salió mal. Por favor proporcione un número válido.' };
      } else {
        return { 'Err': 'Something went wrong. Please provide a valid number.' };
      }
    } else {
      questionResponse.answer = num;
    }
  }
  else if (currentQuestion.type === 'multi' || currentQuestion.type === 'rank') {
    const errBox = [];
    if (input.match(/\d+/g) != null) {
      // SPLIT STRING INTO INDIVIDUAL CHAR -> CONVERT ARR TO STRING -> EXTRACT DIGITS ONLY -> DIGITS TO ARRAY -> FILTER UNIQUE VALUES -> LIMIT TO FIRST 7 IN ARR.
      const numbers = input.split('').toString().match(/\d+/g).map(Number).filter((v, i, a) => a.indexOf(v) === i).splice(0, currentQuestion.options.length);
      numbers.forEach(num => {
        console.log(num < 1 || num > currentQuestion.options.length);

        if (isNaN(num)) {
          errBox.push(1);
        } else if (num < 1 || num > currentQuestion.options.length) {
          errBox.push(1);
        }
      });
      if (errBox.length > 0) {
        if (survey.spanish === true) {
          return { 'Err': `Algo salió mal. Por favor proporcione ${currentQuestion.limit} números entre 1 y ${currentQuestion.options.length}.` };
        } else {
          return { 'Err': `Something went wrong. Please provide ${currentQuestion.limit} numbers between 1 and ${currentQuestion.options.length}.` };
        }
      }
      if (numbers === null) {
        if (survey.spanish === true) {
          return { 'Err': `Algo salió mal. Por favor proporcione ${currentQuestion.limit} números entre 1 y ${currentQuestion.options.length}.` };
        } else {
          return { 'Err': `Something went wrong. Please provide ${currentQuestion.limit} numbers between 1 and ${currentQuestion.options.length}.` };
        }
      } else {
        questionResponse.answer = numbers;
      }
    } else {
      if (survey.spanish === true) {
        return { 'Err': 'Algo salió mal. Por favor inténtelo de nuevo.' };
      } else {
        return { 'Err': 'Something went wrong. Please try again.' };
      }
    }
  }
  else if (currentQuestion.type === 'address') {
    if (currentQuestion.location === 'work' && (input.toLowerCase() === 'home' || input.toLowerCase() === 'casa')) {
      survey.work = {
        "coordinates": [-99.99, 99.99],
        "type": "Point"
      }
    } else {
      const geo = await checkAddress.geocode(input);
      if (geo.features.length === 0) {
        if (currentQuestion.location === 'home') {
          survey.home = {
            "coordinates": [-89.99, 89.99],
            "type": "Point"
          };
        }
        if (currentQuestion.location === 'work') {
          survey.work = {
            "coordinates": [-79.99, 79.99],
            "type": "Point"
          };
        }
        if (currentQuestion.location === 'school') {
          survey.school = {
            "coordinates": [-69.99, 69.99],
            "type": "Point"
          };
        }
      } else {
        if (currentQuestion.location === 'home') {
          survey.home = geo.features[0].geometry;
        }
        if (currentQuestion.location === 'work') {
          survey.work = geo.features[0].geometry;
        }
        if (currentQuestion.location === 'school') {
          survey.school = geo.features[0].geometry;
        }
      }
    }
    questionResponse.answer = input;
  }
  else if (currentQuestion.type === 'email') {
    if (validate.isEmail(input) === true) {
      survey.optIn = true;
      questionResponse.answer = input;
    } else {
      if (survey.spanish === true) {
        return { 'Err': 'Algo salió mal. Por favor ingrese una dirección de correo electrónico válida.' };
      } else {
        return { 'Err': 'Something went wrong. Please enter a valid email.' };
      }
    }
  }
  if (isEmpty(questionResponse) === false) {
    survey.responses.push(questionResponse);
  }
  return survey;
}