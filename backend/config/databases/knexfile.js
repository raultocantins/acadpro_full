// Update with your config settings.

module.exports = {
    client: 'postgresql',
    connection: {
      database: 'acadpro',
      user:     'postgres',
      password: '3571592486'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    
  }

};
