exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.text("desciptions")
      table.boolean("completed").notNull().defaultTo(false)
  
    })
  
    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.text("descriptions").notNull()
        table.text("notes")
        table.boolean("completed").notNull().defaultTo(false)
        table.integer("project_id")
          .references("id")
          .inTable("projects")
          .onDelete("SET NULL")
          .onUpdate("CASCADE")
    })
  
    await knex.schema.createTable("resources", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.text("description")
    })
  
    await knex.schema.createTable("resources_projects", (table) => {
        table.integer("resource_id")
          .references("id")
          .inTable("resources")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
        table.integer("project_id") 
          .references("id")
          .inTable("projects") 
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
        table.primary(["resource_id", "project_id"])  
    })
  
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("resources_projects")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")
    
  };