// const puppeteer = require('puppeteer');
const path = require('path')
const pug = require('pug');
const fs = require('fs');


var today = new Date();
var y = today.getFullYear();
// JavaScript months are 0-based.
var m = today.getMonth() + 1;
var d = today.getDate();
var h = today.getHours();
var mi = today.getMinutes();
var s = today.getSeconds();
const theDate = y + "-" + m + "-" + d + "-" + h + mi;

exports.singlePdf = async (req, res, next) => {
  // var fullUrl = req.protocol + '://' + req.get('host') + `/result/${req.params.id}/view`;
  next();
  // const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  // const page = await browser.newPage();
  // await page.goto(fullUrl, { waitUntil: 'networkidle2' });
  // await page.pdf({ path: `${theDate}_survey-${req.body.result.count}-responses.pdf`, format: 'A4' });
  // await browser.close();
  // res.download(`${theDate}_survey-${req.body.result.count}-responses.pdf`);
}