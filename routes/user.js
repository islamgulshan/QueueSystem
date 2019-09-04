var express= require('express');

var router = express.Router();

const tokenEnrollmentController= require('../controllers/tokenEnrollmentController');

router.post('/generate/token',tokenEnrollmentController.AddEnrollement);



//
router.post('/total/sale/patientName',tokenEnrollmentController.totalPatientName);

// get total sale of token in 
router.post('/total/sale/Dispenser',tokenEnrollmentController.totalSaleDispenr);

//Total sale of token by date
router.post('/total/sale/date',tokenEnrollmentController.totalSaleDate);

// Total beteen date 
router.post('/total/sale/betweendate',tokenEnrollmentController.betweendate);

// years 
router.post('/total/sale/years',tokenEnrollmentController.years);

// Month
router.post('/total/sale/month',tokenEnrollmentController.month);



// will exports all function and varaible to main js file 
module.exports = router;