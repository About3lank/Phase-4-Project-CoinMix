class Coin < ApplicationRecord
    has_many :user_coins, dependent: :destroy
    has_many :users, through: :user_coins
end
