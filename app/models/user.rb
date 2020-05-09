class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  belongs_to :group, optional: true

  has_one :managed_group, class_name: "Group", foreign_key: "group_leader_id"

  validates :first_name, :last_name, presence: true
end
