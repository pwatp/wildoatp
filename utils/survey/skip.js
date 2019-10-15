exports.skip = async (survey, questions) => {
  var responseLength = survey.responses.length;
  const pushers = new Array();

  // LOOP FROM CURR QUESTION TO END OF SURVEY
  for (let index = responseLength; index < questions.survey.length; index++) {
    const element = questions.survey[index];
    // STOP LOOP WHEN QUESTION DOESN'T HAVE A SKIP
    if (!element.skips) break;
    const skippers = new Array();
    // CHECK IF CRITERIA MATCHES RESPONSE
    element.skips.forEach(skip => {
      if (skip.qNum <= responseLength - 1) {
        var checker = function (check) {
          return check == survey.responses[skip.qNum].answer;
        }
        skippers.push(skip.criteria.some(checker))
      }
    });
    // GROUP BY QUESTON
    pushers.push(skippers);
  }
  
  // GET SINGLE ACTION FOR EACH Q
  const actors = new Array();
  for (let index = 0; index < pushers.length; index++) {
    const q = pushers[index];
    actors.push(q.includes(true));
  }

  // SEE IF ACTION IS TRUE FOR EA Q 
  for (let index = 0; index < actors.length; index++) {
    var doIt = actors[index];
    // BREAK LOOP IF Q DOES NOT HAVE TRUE
    if (doIt === true) {
      // PUSH SKIP ANS IF Q HAS TRUE
      survey.responses.push({'answer': 'skip'});
    } else {
      break;
    }
  }
  return survey;
}