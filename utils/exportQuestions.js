require('dotenv').config();
const fs = require('fs');
const moment = require('moment');
const respond = require('./survey/respond');
const espSurvey = require('../data/survey_esp');
const engSurvey = require('../data/survey_eng');
const hardSurvey = [espSurvey, engSurvey];
var Questions = require('../models/Questions');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //USE ES6 PROMISES see:http://mongoosejs.com/docs/promises.html#plugging-in-your-own-promises-library

// DB CONNECTION
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, promiseLibrary: global.Promise }).then(
  () => { console.log('🔗 👌 🔗 👌 🔗 👌 🔗 👌 Mongoose connection open.') },
  err => { console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`) }
);

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const howMany = (ind) => {
  var numberSelected = {
    'responses': []
  };
  for (var i = 0; i < ind; i++) {
    numberSelected.responses.push({ answer: 'fake' })
  }
  return numberSelected;
}

async function go(hardcode) {
  try {
    await asyncForEach(hardcode, async (survey) => {
      const questions = await Questions.findOne({ title: survey.title });
      const english = await Questions.findOne({ title: 'English' });

      const questDetail = questions.survey.map((x, index) => {
        let string = '';
        const fakeAns = howMany(index);
        if (questions.title === 'Spanish' ) {        
          fakeAns.spanish = true;
        }
        if (index != 0) {
          string += '\r\n\r\n'
        }
        string += `Message #${index + 1}\r\n`;
        if (x.skips) {
          x.skips.forEach(skp => {
            var skipStrg = '';
            skp.criteria.forEach((crit, i) => {
              if (i > 1) { skipStrg += ', ' }
              if (skp.criteria.length > 1 && skp.criteria.length === i + 1) { skipStrg += ' or ' }
              if (typeof (crit) === 'boolean') {
                if (crit === true) { skipStrg += '\'Yes\'' }
                else { skipStrg += '\'No\'' }
              }
              else if (typeof (crit) === 'number') {
                skipStrg += `'${questions.survey[skp.qNum].options[crit - 1]}'`
              }
            });
            string += `**Skipped if the response to Message #${skp.qNum + 1} is ${skipStrg}.**\r\n`
          });
        }        
        if (fakeAns.spanish === true && fakeAns.responses.length === 0) {
          string += `**The introductory message will always be sent in English by default. If Spanish is selected, the introduction will be resent in Spanish as part of the next message.**\r\n`
          const pretty = respond.response(fakeAns, english);
          if (Array.isArray(pretty) && pretty !== null) {
            pretty.forEach((el, index) => {
              string += el;
              if (index+1 != pretty.length) {
                string += '\r\n\r\n';            }
            });
          } else {
            string += pretty;
          } 
        } else {
          const pretty = respond.response(fakeAns, questions);
          if (Array.isArray(pretty) && pretty !== null) {
            pretty.forEach((el, index) => {
              string += el;
              if (index+1 != pretty.length) {
                string += '\r\n\r\n';            }
            });
          } else {
            string += pretty;
          }
        }
        return string;
      });
      const dateStr = moment().format('MMDDYYYY_HHmm');
      const savePath = `./${questions.title}_${dateStr}.txt`

      // SAVE FILE!
      fs.writeFile(`${savePath}`, questDetail.join(''), function (err) {
        if (err) { throw err };
        console.log(`Saved: ${savePath}`);
      });
    });
    mongoose.connection.close();
  } catch (e) {
    console.error(e); // 💩
    mongoose.connection.close();
  }
}

go(hardSurvey);