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

User.create(email: "erosenberg39@gmail.com", password: "123456", first_name: "Ethan", last_name: "Rosenberg")
User.create(email: "test@test.com", password: "123456", first_name: "Test", last_name: "McTester")
User.create(email: "mj@mj.com", password: "6times", first_name: "Michael", last_name: "Jordan")
