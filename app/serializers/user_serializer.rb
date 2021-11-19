class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email 

  # has_many :coins, through: :user_coins
end
