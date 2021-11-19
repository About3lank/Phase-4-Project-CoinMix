class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  #  :user_coin

  has_many :coins
  has_many :user_coins
  has_many :user_preferences

  # def user_coin
  #   UserCoin.find_by(user_id: current_user.id, coin_id: self.object.id)
  # end

end
