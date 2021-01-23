import { validationResult } from "express-validator";

const r = (path: any, router: any) => {
    return { path: path, router: router }
}

const validate = (req: any, res: any, callback: any) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    callback()
}


export {
    r,
    validate
}