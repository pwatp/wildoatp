const express = require('express');
const router = express.Router();

// IMPORT CONTROLLERS
const pageControl = require('../controllers/pageControl');
const smsControl = require('../controllers/smsControl');
const responseControl = require('../controllers/responseControl')
const questionControl = require('../controllers/questionControl')
const apiControl = require('../controllers/apiControl')
const xlsControl = require('../controllers/xlsControl')
const pdfControl = require('../controllers/pdfControl')
const { catchErrors } = require('../utils/errorHandlers')

router.get('/', pageControl.home);
router.get('/summary'
    , apiControl.allResults
    , apiControl.summary
    , pageControl.summary
);

router.get('/results'
    , apiControl.allResults
    , pageControl.results
);

router.get('/results/export'
    , apiControl.allResults
    , questionControl.engQuestions
    , xlsControl.allXls
);


router.get('/result/:id/view'
    , responseControl.resultById
    , questionControl.engQuestions
    , pageControl.result
);

router.get('/result/:id/download/xls'
    , responseControl.resultById
    , questionControl.engQuestions
    , xlsControl.singleXls
);

router.get('/result/:id/download/pdf'
    , responseControl.resultById
    , questionControl.engQuestions
    // , catchErrors(pdfControl.singlePdf)s
);

// API
router.get('/api/results'
    , apiControl.allResults
    , apiControl.results
);

// SMS
router.post('/inbound'
    , smsControl.inbound
    , catchErrors(responseControl.getSurvey)
    , catchErrors(questionControl.getQuestions)
    , catchErrors(responseControl.advanceSurvey)
);

module.exports = router;