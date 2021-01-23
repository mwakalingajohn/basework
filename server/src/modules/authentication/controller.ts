import { validate } from "../../library/helpers"

class controller
{
    register(req: any, res: any)
    {
        validate(req, res, () => {
            res.send(req.body)
        })
    }
}

export default controller