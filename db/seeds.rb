# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "erosenberg39@gmail.com", password: "123456", first_name: "Ethan", last_name: "Rosenberg")
User.create(email: "test@test.com", password: "123456", first_name: "Test", last_name: "McTester")
User.create(email: "mj@mj.com", password: "6times", first_name: "Michael", last_name: "Jordan")

Run.create(name: "Testing Run", description: "This is a test run", start_time: "May 15th at 9:00am", start_location: "14 Main Street, Boston, MA.", distance: 5, group: Group.first)
Run.create(name: "Charles River 5k", description: "A nice loop around the Charles River esplanade", start_time: "May 11th at 12:00pm", start_location: "18 Charles Street, Boston, MA.", distance: 3.1, group: Group.first)
Run.create(name: "Marathon Prep", description: "A long run from Hopkinton to Newton", start_time: "May 20th at 6:00am", start_location: "5 Pleasant Street, Hopkinton, MA.", distance: 20, group: Group.second_to_last)
Run.create(name: "Coded All Day", description: "We will go slow", start_time: "May 13th at 10:00pm", start_location: "77 Summer Street, Boston, MA.", distance: 1, group: Group.last)
