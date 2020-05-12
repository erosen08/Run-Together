# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Group.create(name: "Testing Group 1", description: "We are here to be tested.")
Group.create(name: "Nick's Jogging Group", description: "We go for leisurely runs around the Charles River.")
Group.create(name: "Fang's Fast Runners", description: "We run really fast, but for a very short time.")
Group.create(name: "Kerrin's Cross Country Club", description: "Only the great outdoors is a suitable place for our runs.")
Group.create(name: "Men of Launch Academy", description: "Our calendar failed, but perhaps we can create a community here.")
Group.create(name: "Nashua - New Hampshire", description: "Looking for casual runners around Nashua, NH to explore the great outdoors.")
Group.create(name: "Firefighters of Worcester", description: "A group of firefighters from Station 25 in Worcester, MA.  All are welcome.")
Group.create(name: "Boston Marathon Training", description: "A group of runners dedicated to running the Boston Marathon in fall 2020.")
Group.create(name: "Coach to 5k", description: "A group of lazy web developers who have gotten a little round.")

User.create(email: "erosenberg39@gmail.com", password: "123456", first_name: "Ethan", last_name: "Rosenberg")
User.create(email: "test@test.com", password: "123456", first_name: "Test", last_name: "McTester")
User.create(email: "mj@mj.com", password: "6times", first_name: "Michael", last_name: "Jordan")

Run.create(name: "Testing Run", description: "This is a test run", start_time: "May 15th at 9:00am", start_location: "14 Main Street, Boston, MA.", distance: 5, group: Group.first)
Run.create(name: "Charles River 5k", description: "A nice loop around the Charles River esplanade", start_time: "May 11th at 12:00pm", start_location: "18 Charles Street, Boston, MA.", distance: 3.1, group: Group.first)
Run.create(name: "Marathon Prep", description: "A long run from Hopkinton to Newton", start_time: "May 20th at 6:00am", start_location: "5 Pleasant Street, Hopkinton, MA.", distance: 20, group: Group.second_to_last)
Run.create(name: "Coded All Day", description: "We will go slow", start_time: "May 13th at 10:00pm", start_location: "77 Summer Street, Boston, MA.", distance: 1, group: Group.last)
