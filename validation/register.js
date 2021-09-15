const validator = require('validator');		// use to check for valid inputs
const isEmpty = require('is-empty');

// Check if registered input is valid or not
const isRegisterInputValid = (data) => {
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.passworsd2 = !isEmpty(data.passworsd2) ? data.passworsd2 : '';

	// Checks
	// for name
	if(validator.isEmpty(data.name)) {
		errors.name = 'Name is required'
	}

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
	if(validator.isEmpty(data.password2)) {
		errors.password2 = 'Password is required';
	}
	if(!validator.isLength(data.password, {min:7, max:20})) {
		errors.password = 'Password must be atleast 7 characters long';
	}
	if(!validator.equals(data.password, data.password2)) {
		errors.password = 'Passwords do not match';
	}

	return {errors, isValid: isEmpty(errors)};
};

module.exports = isRegisterInputValid;