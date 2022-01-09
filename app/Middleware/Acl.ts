import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    allowedRoutes: string[]
  ) {
    const user = await auth.authenticate()

    if (!allowedRoutes.includes(user.role)) {
      return response.unauthorized({error: "access denied"})
    }

    console.log(allowedRoutes)
    await next()
  }
}
