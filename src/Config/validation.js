const joi = require('joi');
// thư viện validate 
const userValidate = data =>{
    const userSchema = joi.object({
        email: joi.string().pattern(new RegExp('gmail.com$')).email().lowercase().required(),
        password: joi.string().min(8).max(32).required()
    });
    return userSchema.validate(data)
}

module.exports = {
    userValidate
}