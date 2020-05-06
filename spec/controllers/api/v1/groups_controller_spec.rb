require 'rails_helper'

RSpec.describe Api::V1::GroupsController, type: :controller do
  describe "GET#index" do
    let!(:group1) { Group.create(name: "Test Group 1", description: "This is first group") }
    let!(:group2) { Group.create(name: "Test Group 2", description: "This is the second group") }

    it "returns a sucessful response status and a content type of json" do
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json'
    end

    it "returns all groupss in the database" do
      get :index
      response_body = JSON.parse(response.body)

      expect(response_body.length).to eq 2

      expect(response_body[0]["name"]).to eq group1.name
      expect(response_body[0]["description"]).to eq group1.description

      expect(response_body[1]["name"]).to eq group2.name
      expect(response_body[1]["description"]).to eq group2.description
    end
  end
end
