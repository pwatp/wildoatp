
let TW_SID = '';
let TW_TOKEN = '';
let TW_NUM = '';

if (process.env.NODE_ENV === 'development') {
  TW_SID = process.env.TWILIO_BETA_SID;
  TW_TOKEN = process.env.TWILIO_BETA_TOKEN;
  TW_NUM = process.env.TWILIO_BETA_NUM;}
else {
  TW_SID = process.env.TWILIO_SID;
  TW_TOKEN = process.env.TWILIO_TOKEN;
  TW_NUM = process.env.TWILIO_NUM;
}

const twilio = require('twilio')(TW_SID, TW_TOKEN);

exports.sendMessage = (msg, ph) => {
  twilio.messages
    .create({
      to: ph,
      from: TW_NUM,
      body: msg,
    })
    .done();
};


function getCoffee(delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve('☕'), delay * 1000); // it takes 2 seconds to make coffee
  });
}

exports.asMessage = async (msg, ph, delay) => {
  try {
    await getCoffee(delay);
    await twilio.messages.create({
      to: ph,
      from: TW_NUM,
      body: msg,
    });
  } catch (error) {
    return 'err'
  }
};