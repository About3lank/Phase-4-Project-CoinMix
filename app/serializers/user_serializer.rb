class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email 
  has_many :user_coins
  has_many :user_preferences
end
