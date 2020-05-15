require 'rails_helper'

RSpec.describe Api::V1::GroupsController, type: :controller do
  let!(:group1) { Group.create(name: "Test Group 1", description: "This is first group", zip: "02413", difficulty: "Beginner") }
  let!(:group2) { Group.create(name: "Test Group 2", description: "This is the second group", zip: "12345") }

  describe "GET#index" do
    it "returns a sucessful response status and a content type of json" do
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json'
    end

    it "returns all groupss in the database" do
      get :index
      response_body = JSON.parse(response.body)

      expect(response_body["groups"].length).to eq 2

      expect(response_body["groups"][0]["name"]).to eq group1.name
      expect(response_body["groups"][0]["description"]).to eq group1.description
      expect(response_body["groups"][0]["zip"]).to eq group1.zip
      expect(response_body["groups"][0]["difficulty"]).to eq group1.difficulty

      expect(response_body["groups"][1]["name"]).to eq group2.name
      expect(response_body["groups"][1]["description"]).to eq group2.description
      expect(response_body["groups"][1]["zip"]).to eq group2.zip
    end
  end

  describe "GET#show" do
    it "returns a sucessful response status and a content type of json" do
      get :show, params: {id: group1.id}

      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json'
    end

    it "should return an individual group" do
      get :show, params: {id: group1.id}
      response_body = JSON.parse(response.body)

      expect(response_body.length).to eq 1
      expect(response_body["group"].length).to eq 8

      expect(response_body["group"]["name"]).to eq group1.name
      expect(response_body["group"]["description"]).to eq group1.description
    end
  end

  describe "POST#create" do
    let!(:new_group) { { group: { name: "New Group", description: "Hey I'm new", zip: "45250" } } }
    let!(:no_name) { { group: { description: "I have no name" } } }
    let!(:no_description) { { group: {name: "Failing Group" } } }

    it "adds a new group to the database when entry is valid" do
      previous_count = Group.count
      post :create, params: new_group, format: :json

      expect(Group.count).to eq(previous_count + 1)
    end

    it "returns json of newly formed group" do
      post :create, params: new_group, format: :json
      response_body = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(response_body).to be_kind_of(Hash)
      expect(response_body).to_not be_kind_of(Array)
      expect(response_body["group"]["name"]).to eq "New Group"
      expect(response_body["group"]["description"]).to eq "Hey I'm new"
      expect(response_body["group"]["zip"]).to eq "45250"
    end

    it "does not add a new group to the database upon invalid submission" do
      prev_count = Group.count

      post :create, params: no_name, format: :json
      expect(Group.count).to eq prev_count

      post :create, params: no_description, format: :json
      expect(Group.count).to eq prev_count
    end

    it "raises an error upon an invalid submission" do
      post :create, params: no_name, format: :json
      response_body = JSON.parse(response.body)
      expect(response_body["error"][0]).to eq "Name can't be blank"

      post :create, params: no_description, format: :json
      response_body = JSON.parse(response.body)
      expect(response_body["error"][0]).to eq "Description can't be blank"
    end
  end

  describe "PATCH#edit" do
    it "updates an existing group but does not create a new entry on the database" do
      happy_body = { id: group1.id, group: { name: "A Better Group 1", description: "New and Improved", zip: "12345" } }

      previous_count = Group.count
      patch :update, params: happy_body, format: :json

      expect(Group.count).to eq(previous_count)
    end

    it "returns the json of the newly edited group" do
      happy_body = { id: group1.id, group: { name: "A Better Group 1", description: "New and Improved", zip: "12353" } }

      patch :update, params: happy_body, format: :json
      response_body = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(response_body).to be_kind_of(Hash)
      expect(response_body).to_not be_kind_of(Array)
      expect(response_body["group"]["name"]).to eq "A Better Group 1"
      expect(response_body["group"]["description"]).to eq "New and Improved"
      expect(response_body["group"]["zip"]).to eq "12353"
    end

    it "returns an error when required field is blank" do
      sad_body = { id: group1.id, group: { description: "Where's my name?" } }

      post :update, params: sad_body, format: :json
      response_body = JSON.parse(response.body)

      expect(response_body["error"][0]).to eq "Name can't be blank"
    end
  end

  describe "DELETE#destroy" do
    it "deletes a group" do
      group = { id: group1 }

      prev_count = Group.count
      delete :destroy, params: group, format: :json
      expect(Group.count).to eq(prev_count - 1)
      response_body = JSON.parse(response.body)

      expect(response_body["notification"]).to eq "Group successfully removed"
    end
  end
end
