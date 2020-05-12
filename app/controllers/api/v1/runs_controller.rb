class Api::V1::RunsController < ApplicationController
  def index
    group = Group.find(params["group_id"])
    runs = group.runs

    render json: runs
  end
end
