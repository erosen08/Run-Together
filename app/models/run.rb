class Run < ApplicationRecord
  belongs_to :group

  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
end
