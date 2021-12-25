import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class FisrtUserSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.create({
      email: 'guh.contato.work@outlook.com.br',
      password: 'secret',
    })
  }
}
