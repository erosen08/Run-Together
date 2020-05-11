class RunSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :distance, :start_time, :start_location, :group_id

  belongs_to :group
end
