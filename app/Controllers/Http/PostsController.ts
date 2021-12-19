// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import PostModel
export default class PostsController {
  index() {
    // return PostModel.all
    return ['post1', 'post2', 'post3']
  }
}

// Route -> Controller -> Models
