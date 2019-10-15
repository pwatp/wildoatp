var fs = require('fs');
const ejs = require('ejs');
var axios = require('axios')
const endPoint = 'http://activele-survey.herokuapp.com/api/results'
const questions = require('./config/survey_eng')

var pdf = require('html-pdf');
const singleOptions = require('./config/pdfOptions_single')


function writeFileStream(filePath, data) {
  var writeStream = fs.createWriteStream(filePath, { encoding: 'utf-8', flag: 'w' })
  writeStream.write(data);
  writeStream.on('close', function () {
    console.log('Write stream is closed. ');
  })
}
const ejsAssemble = async (questions, clean) => {
  try {
    ejs.renderFile('./views/results.ejs',
      {
        questions: questions,
        surveys: clean
      }, (err, html) => {
        if (err) { throw (err); }
          pdf.create(html, singleOptions).toFile('./pdf/Results_20190103.pdf', function (err, res) {
            if (err) return console.log(err);
            console.log(res);
          }); 
        const fixed = html.replace(/a*(\.\.\/dist\/)/g, '')
        writeFileStream('./dist/results.html', fixed);
      });

  } catch (error) {
    console.log(error);
  }
}

const go = async () => {
  try {
    const response = await axios.get(endPoint);
    const surveys = response.data.surveys;
    const clean = new Array();
    surveys.forEach(survey => {
      if (survey.responses.length > 3) {
        clean.push(survey);
      }
    });
    ejsAssemble(questions, clean);
  } catch (error) {
    console.error(error);
  }
}

go();