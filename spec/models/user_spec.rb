require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid email, first name, last name, and password" do
    user = user = FactoryBot.create(:user)

    expect(user).to be_valid
  end

  it "is not valid without an email" do
    user = User.new(
      email: "",
      first_name: "John",
      last_name: "Smith",
      password: "password"
    )

    expect(user).to_not be_valid
    expect(user.errors.full_messages.to_sentence).to eq("Email can't be blank")
  end

  it "is not valid without a first name" do
    user = User.new(
      email: "john@example.com",
      first_name: "",
      last_name: "Smith",
      password: "password"
    )

    expect(user).to_not be_valid
    expect(user.errors.full_messages.to_sentence).to eq("First name can't be blank")
  end

  it "is not valid without a last name" do
    user = User.new(
      email: "john@example.com",
      first_name: "John",
      last_name: "",
      password: "password"
    )

    expect(user).to_not be_valid
    expect(user.errors.full_messages.to_sentence).to eq("Last name can't be blank")
  end

  it "is not valid without a password" do
    user = User.new(
      email: "john@example.com",
      first_name: "John",
      last_name: "Smith",
      password: ""
    )

    expect(user).to_not be_valid
    expect(user.errors.full_messages.to_sentence).to eq("Password can't be blank")
  end

  it "is not valid without a password that is at least 6 characters" do
    user = User.create(
      email: "john@example.com",
      first_name: "John",
      last_name: "Smith",
      password: "short"
    )

    expect(user).to_not be_valid
    expect(user.errors.full_messages.to_sentence).to eq("Password is too short (minimum is 6 characters)")
  end

end
