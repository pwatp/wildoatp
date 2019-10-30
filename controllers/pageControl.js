
let phoneNumber = '';

if (process.env.NODE_ENV === 'development') {
  phoneNumber = process.env.TWILIO_BETA_NUM.split("");
} else {
  phoneNumber = process.env.TWILIO_NUM.split("");
}


exports.home = (req, res) => {
  var prettyNum = `(${phoneNumber.slice(2,5).join('')}) ${phoneNumber.slice(5,8).join('')}-${phoneNumber.slice(8,12).join('')}`;
  res.render('home', {
    title: 'Home',
    phone: prettyNum
  });
}

exports.results = (req, res) => {
  res.render('results', {
    title: 'Results',
    results: req.body.results
  });
}

exports.summary = (req, res) => {
  res.json(req.body.summary);
}

exports.result = (req, res) => {
  res.render('singleResult', {title: `Survey #${req.body.result.beta} - Results`, result: req.body.result, questions: req.body.questions});
}