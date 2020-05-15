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

  def create
    group = Group.find(params[:group_id])
    run = Run.new(run_params)
    run.group_id = group.id
    if run.save
      render json: { run: run }
    else
      render json: { error: run.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def run_params
    params.require(:run).permit(:name, :description, :start_time, :start_location, :distance)
  end

end
