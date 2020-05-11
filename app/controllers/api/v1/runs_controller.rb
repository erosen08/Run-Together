class Api::V1::RunsController < ApplicationController

  def index
    render json: Run.all
  end

  def show
    render json: Run.find(params[:id])
  end

  def create
  end

end
