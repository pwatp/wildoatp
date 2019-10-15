const twilio = require('twilio')(process.env.TWILLIO_SID, process.env.TWILLIO_TOKEN);

exports.sendMessage = (msg, ph) => {
  twilio.messages
  .create({
    to: ph,
    from: process.env.TWILLIO_NUM,
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
      from: process.env.TWILLIO_NUM,
      body: msg,
    });
  } catch (error) {
    return 'err'
  }
};