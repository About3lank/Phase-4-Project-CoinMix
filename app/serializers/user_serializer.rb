class UserSerializer < ActiveModel::Serializer
  attributes :id, :username 
  has_many :user_coins
  has_many :user_preferences
end
