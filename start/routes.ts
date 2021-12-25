import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'PostsController.index')

Route.resource('/posts', 'PostsController').apiOnly()
