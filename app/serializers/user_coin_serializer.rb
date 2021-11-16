class UserCoinSerializer < ActiveModel::Serializer
  attributes :id, :amount, :user_id, :coin_id
end
