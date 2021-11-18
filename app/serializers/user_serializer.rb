class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email 
  has_many :user_coins
  has_many :user_preferences
  # has_many :coins, through: :user_coins
end
