User.create(email: "erosenberg39@gmail.com", password: "123456", first_name: "Ethan", last_name: "Rosenberg")
User.create(email: "test@test.com", password: "123456", first_name: "Test", last_name: "McTester")

Group.create(name: "Seaport Runners", description: "We love the Boston Seaport!  We do weekly runs, often ending at Harpoon Brewery!", zip: "02210", difficulty: "Beginner")
Group.create(name: "Boston Marathon Training", description: "A group designed to help those training for the upcoming Boston Marathon.", zip: "02116", difficulty: "Expert")
Group.create(name: "MGH Physician Moms", description: "We typically meet before work and run around the Charles River.  Running strollers are welcome.", zip: "02114", difficulty: "Intermediate")
Group.create(name: "Running with Dogs", description: "We welcome all runners to bring their furry friends.  Please just make sure their vaccinations are up to date", zip: "02143", difficulty: "Intermediate")
Group.create(name: "Tufts Alumni", description: "A group for any Jumbos, former or current.", zip: "02761", difficulty: "Beginner")
Group.create(name: "Software Engineers of Boston", description: "Front end or Back end?  Or Full stack?  Doesn't matter, all are welcome to come join us.", zip: "02154", difficulty: "Beginner")
Group.create(name: "Castle Island Enthusiasts", description: "We love meeting up at Castle Island and running with the Harbor all around.", zip: "02071", difficulty: "Beginner")
Group.create(name: "Back Bay Joggers", description: "Typically we run around Back Bay, taking in all the historic neighborhood has to offer.", zip: "02112", difficulty: "Intermediate")
Group.create(name: "Upper West Side Explorers", description: "We meet monthly to run the magnificient Upper West Side.", zip: "01031", difficulty: "Intermediate")
Group.create(name: "Running Club of Oakley", description: "Join us for our bi-weekly runs around Oakley.  We usually end our runs at one of the local pubs on Montgomery", zip: "45510", difficulty: "Intermediate")

Run.create(name: "Harborwalk",
  description: "A short loop around the Boston Harborwalk",
  start_time: "May 21st @ 9:00am",
  start_location: "ICA",
  distance: 3,
  group_id: 1)

Run.create(name: "Training Run from Hopkinton",
  description: "We will start from the Marathon Start Line and go for 20 miles",
  start_time: "May 25th @ 7:00am",
  start_location: "E Main Street, Hopkinton, MA",
  distance: 20,
  group_id: 2)

Run.create( name: "BU Bridge Loop",
  description: "A nice loop from Charles/MGH T stop to the BU bridge and back.",
  start_time: "May 23rd @ 12:00pm",
  start_location: "Charles/MGH T Stop",
  distance: 5,
  group_id: 3)

Run.create( name: "Great Brook Farm State Park",
  description:
   "We will be going on a 4 mile run in Great Brook State Park.  Please make sure your doggo can go that far.",
  start_time: "May 30th @ 10:00am",
  start_location: "Great Brook Farm State Park, Carlisle, MA",
  distance: 4,
  group_id: 4)

Run.create(name: "5K Loop from Main Campus",
  description:
   "A nice 5k loop, starting on main campus that highlights some of the great architecture.",
  start_time: "May 26th @ 4:00pm",
  start_location: "Olin Center Tufts",
  distance: 3,
  group_id: 5)

Run.create(name: "Coach to 5K",
  description: "A short training run to help get the blood flowing.",
  start_time: "May 24th @ 8:00am",
  start_location: "77 Summer Street, Boston, MA",
  distance: 2,
  group_id: 6)

Run.create(name: "Castle Island Loop",
  description: "We will do 3 loops of the Castle Island trail.",
  start_time: "May 19th @ 11:00am",
  start_location: "Castle Island Boston",
  distance: 4,
  group_id: 7)

Run.create(name: "Comm Ave Circle",
  description: "We will go down Comm Ave before turning around and completing the loop",
  start_time: "May 18th @ 2:00pm",
  start_location: "80 Commonwealth Avenue",
  distance: 4,
  group_id: 8)

Run.create(name: "Riverside Park",
  description: "A nice evening run for any that are able to attend.",
  start_time: "May 25th @ 7:00pm",
  start_location: "Riverside Park, 96th Street Entrance",
  distance: 4,
  group_id: 9)
