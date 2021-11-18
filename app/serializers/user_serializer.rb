class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username 

  has_many :user_preferences
end
