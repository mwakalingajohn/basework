import { body, check } from "express-validator"

const registrationValidator = () => {
    return [
        body('name').not().isEmpty(),
        body('email').isEmail().not().isEmpty().custom(async (value, { req }) => {
            
        }),
        body('password_confirmation').not().isEmpty(),
        body('password').not().isEmpty().custom((value, { req }) => {
            if (value !== req.body.password_confirmation) return false
            else return true
        }).withMessage("Passwords do match")
    ]
}

export {
    registrationValidator
}