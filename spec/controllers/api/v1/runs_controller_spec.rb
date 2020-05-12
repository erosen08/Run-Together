# require 'rails_helper'
#
# RSpec.describe Api::V1::RunsController, type: :controller do
#   let!(:group1) { Group.create(name: "Test Group 1", description: "This is first group") }
#   let!(:run1) { Run.create(name: "Run 1", description: "This is the first run", start_time: "9:00am", start_location: "4 Main Street", distance: 5, group: group1) }
#
#   describe "GET#index" do
#     it "returns a sucessful response status and a content type of json" do
#       get :index, :group_id => group1.id
#
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq 'application/json'
#     end
#
#     it "returns all runs associated with that group in the database" do
#       get :index
#       response_body = JSON.parse(response.body)
#       binding.pry
#
#       expect(response_body["groups"].length).to eq 2
#
#       expect(response_body["groups"][0]["name"]).to eq group1.name
#       expect(response_body["groups"][0]["description"]).to eq group1.description
#
#       expect(response_body["groups"][1]["name"]).to eq group2.name
#       expect(response_body["groups"][1]["description"]).to eq group2.description
#     end
#   end
# end
