class Api::V1::RunsController < ApplicationController
  def index
    group = Group.find(params["group_id"])
    runs = group.runs

    render json: runs
  end

  def show
    group = Group.find(params["group_id"])
    group_runs = group.runs
    run = group_runs.find(params[:id])

    render json: run
  end
end
