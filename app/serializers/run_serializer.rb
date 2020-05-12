class RunSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :start_time, :start_location, :distance, :group_id
end
