class Api::V1::MembershipsController < ApplicationController
  def create
    membership = Membership.new
    membership.group = Group.find(params[:id])
    membership.user = current_user

    if membership.save
      render json: { notification: "You have joined the group" }
    else
      render json: { error: membership.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
