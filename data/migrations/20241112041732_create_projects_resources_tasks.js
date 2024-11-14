/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments('project_id');  // Primary Key
      table.string('project_name').notNullable();
      table.string('project_description');
      table.integer('project_completed').defaultTo(0);  // 0 = false, 1 = true
    })
    .createTable('resources', table => {
      table.increments('resource_id');  // Primary Key
      table.string('resource_name').unique().notNullable();
      table.string('resource_description');
    })
    .createTable('tasks', table => {
      table.increments('task_id');  // Primary Key
      table.string('task_description').notNullable();
      table.string('task_notes');
      table.integer('task_completed').defaultTo(0);  // 0 = false, 1 = true
      table.integer('project_id')  // Foreign Key to projects
           .unsigned()
           .notNullable()
           .references('project_id')
           .inTable('projects')
           .onDelete('CASCADE')
           .onUpdate('CASCADE');
    })
    .createTable('project_resources', table => {
      table.increments('id');  // Primary Key
      table.integer('project_id')
           .unsigned()
           .notNullable()
           .references('project_id')
           .inTable('projects')
           .onDelete('CASCADE')
           .onUpdate('CASCADE');
      table.integer('resource_id')
           .unsigned()
           .notNullable()
           .references('resource_id')
           .inTable('resources')
           .onDelete('CASCADE')
           .onUpdate('CASCADE');
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
