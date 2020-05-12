require 'rails_helper'

RSpec.describe Run, type: :model do
  it { should have_valid(:name).when("Running Group") }
  it { should_not have_valid(:name).when(nil, "") }
  it { should have_valid(:description).when("We Run!") }
  it { should_not have_valid(:description).when(nil, "") }
  it { should have_valid(:start_time).when("9:00") }
  it { should_not have_valid(:start_time).when(nil, "") }
  it { should have_valid(:start_location).when("4 Main Street") }
  it { should_not have_valid(:start_location).when(nil, "") }
  it { should have_valid(:distance).when(5) }
  it { should_not have_valid(:distance).when(nil, "") }
  it { should_not have_valid(:distance).when("Five") }
end
