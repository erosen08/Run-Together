require 'rails_helper'

RSpec.describe Api::V1::MembershipsController, type: :controller do
  let!(:user) { FactoryBot.create(:user) }
  let!(:group1) { Group.create(name: "Test Group 1", description: "This is first group", zip: "02413", difficulty: "Beginner") }

  describe "POST#create" do
    it "adds a new membership to the database" do
      sign_in user
      previous_count = Membership.count
      post :create, params: {id: group1.id}

      expect(Membership.count).to eq(previous_count + 1)
    end

    # it "returns json of newly formed group" do
    #   post :create, params: new_group, format: :json
    #   response_body = JSON.parse(response.body)
    #
    #   expect(response.status).to eq 200
    #   expect(response.content_type).to eq("application/json")
    #
    #   expect(response_body).to be_kind_of(Hash)
    #   expect(response_body).to_not be_kind_of(Array)
    #   expect(response_body["group"]["name"]).to eq "New Group"
    #   expect(response_body["group"]["description"]).to eq "Hey I'm new"
    #   expect(response_body["group"]["zip"]).to eq "45250"
    # end

    # it "does not add a new group to the database upon invalid submission" do
    #   prev_count = Group.count
    #
    #   post :create, params: no_name, format: :json
    #   expect(Group.count).to eq prev_count
    #
    #   post :create, params: no_description, format: :json
    #   expect(Group.count).to eq prev_count
    # end

    # it "raises an error upon an invalid submission" do
    #   post :create, params: no_name, format: :json
    #   response_body = JSON.parse(response.body)
    #   expect(response_body["error"][0]).to eq "Name can't be blank"
    #
    #   post :create, params: no_description, format: :json
    #   response_body = JSON.parse(response.body)
    #   expect(response_body["error"][0]).to eq "Description can't be blank"
    # end
  end
end
