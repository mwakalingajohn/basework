
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.post('register','Api/AuthenticationController.register')
    Route.post('login','Api/AuthenticationController.login')


  }).prefix('auth')
})
.prefix('api')
