class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :group_id
end
