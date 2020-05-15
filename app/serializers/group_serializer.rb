class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :difficulty, :zip, :user

  has_many :runs
  has_many :memberships

  def user
    if scope
      {id: scope.id, first_name: scope.first_name, last_name: scope.last_name}
    else
      {id: nil, first_name: nil, last_name: nil}
    end
  end
end
