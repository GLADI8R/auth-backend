const validator = require('validator');		// use to check for valid inputs
const isEmpty = require('is-empty');

// Check if login input is valid or not
const isLoginInputValid = (data) => {
	let errors = {};

	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';


	// Checks
	//for Email
	if(validator.isEmpty(data.email)) {
		errors.email = 'Email is required'
	} else if(!validator.isEmail(data.email)) {
		errors.email = 'Invalid Email';
	}

	// for Password
	if(validator.isEmpty(data.password)) {
		errors.password = 'Password is required';
	}

	return {errors, isValid: isEmpty(errors)};
};

module.exports = isLoginInputValid;
