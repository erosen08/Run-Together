require 'rails_helper'

RSpec.describe Group, type: :model do
  describe "validations" do
    it { should have_valid(:name).when("Running Group") }
    it { should_not have_valid(:name).when(nil, "") }

    it { should have_valid(:description).when("Best Group Ever!") }
    it { should_not have_valid(:description).when(nil, "") }

    it "is not valid if another group already has that name" do
      group1 = Group.create(name: "Group 1", description: "Test Group")
      group2 = Group.new(name: "Group 1", description: "Copied from above")

      expect(group2).to_not be_valid
    end
  end
end
