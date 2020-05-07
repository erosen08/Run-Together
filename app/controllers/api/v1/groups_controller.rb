class Api::V1::GroupsController < ApplicationController
  def index
    render json: Group.all
  end

  def show
    render json: Group.find(params[:id])
  end

  def create
    group = Group.new(group_params)
    if group.save
      render json: { group: group }
    else
      render json: { error: group.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, :description)
  end
end
