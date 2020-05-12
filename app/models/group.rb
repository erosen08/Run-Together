class Group < ApplicationRecord
  has_many :memberships
  has_many :users, through: :memberships

  validates :name, presence: true, uniqueness: true
  validates :description, presence: true

  has_many :runs
end
