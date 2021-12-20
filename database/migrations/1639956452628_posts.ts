import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable().unique()
      table.text('content', 'longtext').notNullable()
      table.timestamps(true) // created_at, updated_at
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('slug')
    })
  }
}
