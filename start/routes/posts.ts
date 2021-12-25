import Route from '@ioc:Adonis/Core/Route'

Route.resource('/posts', 'PostsController').apiOnly().middleware({
  store: ['auth'],
  update: ['auth'],
  destroy: ['auth'],
})
// Rooute.get('/').middleware('auth')
