class User < ApplicationRecord
    has_many :user_preferences
    has_many :preferences, through: :user_preferences
    has_many :user_coins
    has_many :coins, through: :user_coins

    has_secure_password

    # validates
end
