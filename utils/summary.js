// const turf = require('@turf/turf');
// const question1 = require('./question1')
// const question2 = require('./question2')
// const question3 = require('./question3')
// const question4 = require('./question4')
// const question5 = require('./question5')
// const question6 = require('./question6')
// const question7 = require('./question7')
// const question15 = require('./question15')
// const question16 = require('./question16')
// const question17 = require('./question17')
// const question18 = require('./question18')
// const combo = require('./combo')
// const email = require('./email')

// function checker(it) {
//   if (!it) {
//     return 0;
//   } else if (it > 0) {
//     return it;
//   } else {
//     return 0;
//   }
// }

exports.pipeline = (surveys) => {
  const notFlag = new Array();
  const complete = new Array();
  const spanish = new Array();
  // const q1 = new Array();
  // const q2 = new Array();
  // const q3 = new Array();
  // const q4 = new Array();
  // const q5 = new Array();
  // const q6 = new Array();
  // const q7 = new Array();
  // const q8 = new Array();
  // const q9 = new Array();
  // const q10 = new Array();
  // const q11 = new Array();
  // const q12 = new Array();
  // const q13 = new Array();
  // const q14 = new Array();
  // const q15 = new Array();
  // const q16 = new Array();
  // const q17 = new Array();
  // const q18 = new Array();
  // const q19 = new Array();
  // const q20 = new Array();
  // const locations = new Array();
  const invalid = new Array();
  surveys.forEach(survey => {
    if (survey.flag != true) {
      notFlag.push(false);
      complete.push(survey.complete);
      spanish.push(survey.spanish);
    } else {
      invalid.push(survey._id);
    }

  //     if (survey.home) {
  //       if (JSON.stringify(survey.home.coordinates) !== '[0,0]') {
  //         locations.push(turf.point(survey.home.coordinates, { 'mode1': survey.responses[1].answer[0], 'mode2': survey.responses[1].answer[1], 'mode3': survey.responses[1].answer[2] }))
  //       }
  //     }
  //     if (survey.responses[1]) {
  //       const ans1 = survey.responses[1].answer;
  //       q1.push(ans1);
  //     }
  //     if (survey.responses[2]) {
  //       const ans2 = survey.responses[2].answer;
  //       q2.push(ans2);
  //     }
  //     if (survey.responses[3]) {
  //       const ans3 = survey.responses[3].answer;
  //       q3.push(ans3);
  //     }
  //     if (survey.responses[4]) {
  //       const ans4 = survey.responses[4].answer;
  //       q4.push(ans4);
  //     }
  //     if (survey.responses[5]) {
  //       const ans5 = survey.responses[5].answer;
  //       q5.push(ans5);
  //     }
  //     if (survey.responses[6]) {
  //       const ans6 = survey.responses[6].answer;
  //       q6.push(ans6);
  //     }
  //     if (survey.responses[7]) {
  //       const ans7 = survey.responses[7].answer;
  //       q7.push(ans7);
  //     }
  //     if (survey.responses[8]) {
  //       const ans8 = survey.responses[8].answer;
  //       q8.push(ans8);
  //     }
  //     if (survey.responses[9]) {
  //       const ans9 = survey.responses[9].answer;
  //       q9.push(ans9);
  //     }
  //     if (survey.responses[10]) {
  //       const ans10 = survey.responses[10].answer;
  //       q10.push(ans10);
  //     }
  //     if (survey.responses[11]) {
  //       const ans11 = survey.responses[11].answer;
  //       if (survey.responses[10].answer === true) {
  //         q11.push(ans11);
  //       }
  //     }
  //     if (survey.responses[12]) {
  //       const ans12 = survey.responses[12].answer;
  //       if (survey.responses[10].answer === false) {
  //         q12.push(ans12);
  //       }
  //     }
  //     if (survey.responses[13]) {
  //       const ans13 = survey.responses[13].answer;
  //       if (survey.responses[12].answer === true) {
  //         q13.push(ans13);
  //       }
  //     }
  //     if (survey.responses[14]) {
  //       const ans14 = survey.responses[14].answer;
  //       q14.push(ans14);
  //     }
  //     if (survey.responses[15]) {
  //       const ans15 = survey.responses[15].answer;
  //       if (survey.responses[14].answer === true) {
  //         q15.push(ans15);
  //       }
  //     }
  //     if (survey.responses[16]) {
  //       const ans16 = survey.responses[16].answer;
  //       q16.push(ans16);
  //     }
  //     if (survey.responses[17]) {
  //       const ans17 = survey.responses[17].answer;
  //       q17.push(ans17);
  //     }
  //     if (survey.responses[18]) {
  //       const ans18 = survey.responses[18].answer;
  //       q18.push(ans18);
  //     }
  //     if (survey.responses[19]) {
  //       const ans19 = survey.responses[19].answer;
  //       if (survey.responses[20])  {
  //         const ans20 = survey.responses[20].answer;
  //         if (ans19 === true || ans19 === 1 || ans19 === 3) {
  //           q20.push({'19': ans19, '20': ans20});
  //         } else {
  //           q20.push({'19': ans19, '20': ans20});
  //         }
  //       }
  //       q19.push(ans19);
  //     }
  });  

  const comp = complete.filter(el => el === true).length;
  const esp = spanish.filter(el => el === true).length;
  const surveyTotal = notFlag.length;
  // const geo = turf.featureCollection(locations);
  // const modes = question1.modeSorter(q1);
  // const q2Clean = question2.rankSorter(q2);
  // const q3Clean = question3.modeSorter(q3);
  // const q4Clean = question4.rankSorter(q4);
  // const q5Clean = question5.modeSorter(q5);
  // const q6Clean = question6.rankSorter(q6);
  // const q7Clean = question7.rankSorter(q7);
  // const q8True = q8.filter(el => el === true).length;
  // const q9True = q9.filter(el => el === true).length;
  // const q10True = q10.filter(el => el === true).length;
  // const q11True = q11.filter(el => el === true).length;
  // const q12True = q12.filter(el => el === true).length;
  // const q13True = q13.filter(el => el === true).length;
  // const q14True = q14.filter(el => el === true).length;
  // const q15Clean = question15.rankSorter(q15);
  // const q16Clean = question16.areaGroups(q16);
  // const q17Clean = question17.areaGroups(q17);
  // const inLocs = combo.locations(q15Clean, q16Clean);
  // const allLocs = combo.locations(q15Clean, q16Clean, q17Clean);
  // const q18Clean = question18.rankSorter(q18);

  // const q20Clean = email.pretty(q20);
  
  const summary = {
    'invalid': invalid.length,
    'total': surveyTotal,
    'complete': {
      'count': comp,
      'percent': (parseFloat(comp / surveyTotal) * 100).toFixed(1)
    },
    'incomplete': {
      'count': surveyTotal - comp,
      'percent': (parseFloat((surveyTotal - comp) / surveyTotal) * 100).toFixed(1)
    },
    'english': {
      'count': surveyTotal - esp,
      'percent': (parseFloat((surveyTotal - esp) / surveyTotal) * 100).toFixed(1)
    },
    'spanish': {
      'count': esp,
      'percent': (parseFloat(esp / surveyTotal) * 100).toFixed(1)
    },
  //   'locations': geo,
  //   'loc_count': geo.features.length,
  //   'q1': {
  //     'question': 'How do you normally travel in/to Richmond?',
  //     'modes': modes[0],
  //     'totalCount': modes[1],
  //     'totalWeight': modes[2]
  //   },
  //   'q2': q2Clean,
  //   'q3': q3Clean,
  //   'q4': q4Clean,
  //   'q5': q5Clean,
  //   'q6': q6Clean,
  //   'q7': q7Clean,
  //   'q8': {
  //     'question': 'Have you heard about the biking and walking path to open on the Richmond-San Rafael Bridge in Spring 2019?',
  //     'yes': q8True,
  //     'yesPct': (parseFloat(q8True / q8.length) * 100).toFixed(1),
  //     'no': q8.length - q8True,
  //     'noPct': (parseFloat((q8.length - q8True) / q8.length) * 100).toFixed(1),
  //     'total': q8.length,
  //   },
  //   'q9': {
  //     'question': 'Would you walk or bike along the Richmond-San Rafael Bridge path?',
  //     'yes': q9True,
  //     'yesPct': (parseFloat(q9True / q9.length) * 100).toFixed(1),
  //     'no': q9.length - q9True,
  //     'noPct': (parseFloat((q9.length - q9True) / q9.length) * 100).toFixed(1),
  //     'total': q9.length,
  //   },
  //   'q10': {
  //     'question': 'Do you currently use the new Richmond Ferry at the end of Harbour Way?',
  //     'yes': q10True,
  //     'yesPct': (parseFloat(q10True / q10.length) * 100).toFixed(1),
  //     'no': q10.length - q10True,
  //     'noPct': (parseFloat((q10.length - q10True) / q10.length) * 100).toFixed(1),
  //     'total': q10.length,
  //   },
  //   'q11': {
  //     'question': 'Do you walk or bike to the Richmond Ferry?',
  //     'yes': q11True,
  //     'yesPct': (parseFloat(q11True / q11.length) * 100).toFixed(1),
  //     'no': q11.length - q11True,
  //     'noPct': (parseFloat((q11.length - q11True) / q11.length) * 100).toFixed(1),
  //     'total': q11.length,
  //   },
  //   'q12': {
  //     'question': 'Would you consider using the new Richmond Ferry in the future?',
  //     'yes': q12True,
  //     'yesPct': (parseFloat(q12True / q12.length) * 100).toFixed(1),
  //     'no': q12.length - q12True,
  //     'noPct': (parseFloat((q12.length - q12True) / q12.length) * 100).toFixed(1),
  //     'total': q12.length,
  //   },
  //   'q13': {
  //     'question': 'Would you walk or bike to the Richmond Ferry?',
  //     'yes': q13True,
  //     'yesPct': (parseFloat(q13True / q13.length) * 100).toFixed(1),
  //     'no': q13.length - q13True,
  //     'noPct': (parseFloat((q13.length - q13True) / q13.length) * 100).toFixed(1),
  //     'total': q13.length,
  //   },
  //   'q14': {
  //     'question': 'Do you live in Richmond?',
  //     'yes': q14True,
  //     'yesPct': (parseFloat(q14True / q14.length) * 100).toFixed(1),
  //     'no': q14.length - q14True,
  //     'noPct': (parseFloat((q14.length - q14True) / q14.length) * 100).toFixed(1),
  //     'total': q14.length,
  //   },
  //   'q15': q15Clean,
  //   'q16': q16Clean,
  //   'q17': q17Clean,
  //   'inCity': inLocs,
  //   'allLocations': allLocs,
  //   'age': q18Clean,
  //   'email': q20Clean
  };
  return summary;
}
