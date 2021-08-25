import {validationResult} from 'express-validator';

export const getXRules = () => {
    return [
        validateX()
    ]
}

const validateX = () => {

}

export const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({[err.param]: err.msg}))
    return res.status(422).json({
        errors: extractedErrors,
    })
}


