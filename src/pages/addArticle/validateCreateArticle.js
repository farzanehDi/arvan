export default function validate(values) {
    let errors = {};
    if (!values.title) {
        errors.title = 'Required field';
    }
    if (!values.description) {
        errors.description = 'Required field';
    } 

    if (!values.body) {
        errors.body= 'Required field';
    } 
    return errors;
};
