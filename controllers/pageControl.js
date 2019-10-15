
exports.home = (req, res) => {
  var phoneNumber = process.env.TWILLIO_NUM.split("");  
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
  res.render('singleResult', {title: `Survey #${req.body.result.count} - Results`, result: req.body.result, questions: req.body.questions});
}