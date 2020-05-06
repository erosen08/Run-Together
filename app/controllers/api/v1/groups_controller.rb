class Api::V1::GroupsController < ApplicationController
  def index
    render json: Group.all
  end

  def show
    render json: Group.find(params[:id])
  end
end
