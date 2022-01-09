import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsers extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        email: 'admin@outlook.com.br',
        password: 'secret',
        role: 'admin'
      },
      {
        email: 'normal@outlook.com.br',
        password: 'secret',
        role: 'normal'
      }
    ])
  }
}
