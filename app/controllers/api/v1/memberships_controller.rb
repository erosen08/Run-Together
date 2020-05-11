class Api::V1::MembershipsController < ApplicationController

  def index
    render json: Membership.all
  end

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

  def destroy
  membership = Membership.find(params[:id])
    if membership.destroy
      render json: { notification: "You have left the group successfully removed" }
    else
      render json: { error: "Unable to process this request" }
    end
  end

end
