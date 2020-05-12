class Run < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :start_time, presence: true
  validates :start_location, presence: true
  validates :distance, presence: true, numericality: true

  belongs_to :group
end
