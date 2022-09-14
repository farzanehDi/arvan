export default function validate(values) {
    let errors = {};
    if (!values.user) {
        errors.user = 'Required field';
    }
    if (!values.email) {
        errors.email = 'Required field';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Required field';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters';
    }
    return errors;
};