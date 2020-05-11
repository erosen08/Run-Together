class Group < ApplicationRecord
  has_many :runs
  
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
end
