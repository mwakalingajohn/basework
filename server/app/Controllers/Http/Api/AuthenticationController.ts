import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User' 

export default class AuthenticationController {

  public async register({ request, response }: HttpContextContract)
  {
    const registrationSchema = schema.create({
      name: schema.string(),
      email: schema.string({}, [
        rules.email(),
        rules.unique({ table: 'users', column: 'email' })
      ]),
      password: schema.string({}, [
        rules.confirmed()
      ])
    })

    const validatedData: any = await request.validate({
      schema: registrationSchema,
    })

    await User.create(validatedData)
    return "Added successfully"
  }

  public async login({ request, auth }: HttpContextContract)
  {
    const loginSchema = schema.create({
      email: schema.string({}, [
        rules.email()
      ]),
      password: schema.string()
    })

    const validatedData: any = await request.validate({
      schema: loginSchema
    })

    const email = validatedData.email
    const password = validatedData.password

    const token = await auth.use("api").attempt(email, password)
    return token.toJSON()

  }
}
