import { extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';

extend('email', email);

extend("min", min)

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('phone_number', {
    validate: (value) => {
        const phoneNumberRegx = /^09(0[1-5]|1[0-9]|3[0-9]|2[0-2]|9[0-4])[0-9]{7}$/
        return phoneNumberRegx.test(value)
    },
    message: 'Please insert a valid phone number!',
})



