
exports.up = function(knex, Promise) {
    console.log('Generating table(s)...')
    return Promise.all([
        knex.schema.createTableIfNotExists('session', function(table) {
            table.increments('id').primary()
            table.string('beforeFeelingId')
            table.string('afterFeelingId')
            table.timestamp('timeLog')
        }),
        knex.schema.createTableIfNotExists('feelings', function(table) {
            table.increments('id').primary()
            table.string('sentimentBefore')
            table.string('sentimentAfter')
        })
    ])
};

exports.down = function(knex, Promise) {
    console.log('Removing tables...')
    return Promise.all([
      knex.schema.dropTableIfExists('session'),
      knex.schema.dropTableIfExists('feelings')
    ])
};
