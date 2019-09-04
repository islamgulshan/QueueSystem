var express= require('express');

var router = express.Router();

const usercontoller= require('../controllers/userControllers');

// reservation Form
 const reservationcontroller= require('../controllers/reservationControllers');


router.post('/login',usercontoller.login);

router.post('/signup',usercontoller.signup);

router.post('/signup',usercontoller.signup);

router.get('/contact_get',usercontoller.signup);


// will exports all function and varaible to main js file 
module.exports = router;