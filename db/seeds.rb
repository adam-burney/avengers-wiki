# -------------------------------------------------------------------------------------------------------------
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# -------------------------------------------------------------------------------------------------------------
# ruby encoding: utf-8

# Add records in avengers table 
# On "marvelcinematicuniverse.fandom.com", it says deceased for Black Widow. We'll check that...
Avenger.create({:super_hero_name => "Iron Man",         :real_name => "Tony Starks", 
                            age: "40", description: "Ingénieur",  :status => "retired"               })
Avenger.create({:super_hero_name => "Captain America",  :real_name => "Steven G. Rogers"            })
Avenger.create({:super_hero_name => "Thor",             :real_name => "Thor son of Odin"            })
Avenger.create({:super_hero_name => "Hulk",             :real_name => "Robert Bruce Banner"         })
Avenger.create({:super_hero_name => "Black Widow",      :real_name => "Natalia Alianovna Romanoff"  })
Avenger.create({:super_hero_name => "Hawkeye",          :real_name => "Clinton Francis Barton"      })

# Add records in users table
User.create({:firstname => "Abraham", :lastname => "Lincoln", :email => "abraham.licoln@gmail.com"})
