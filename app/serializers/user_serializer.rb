class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :risk_profile
end
