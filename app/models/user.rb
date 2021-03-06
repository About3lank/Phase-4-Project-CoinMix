class User < ApplicationRecord
    has_many :user_preferences
    has_many :preferences, through: :user_preferences
    has_many :user_coins, dependent: :destroy
    has_many :coins, through: :user_coins
    #adds password = (setter) instance method, password_confirmation =, and authenticate methods to User Model 
    has_secure_password

    validates :username, presence: true
    validates :email, presence: true, allow_blank: true
    validates :name, presence: true
    validates :age, presence: true, allow_blank: true
    validates :risk_profile, presence: true
end
