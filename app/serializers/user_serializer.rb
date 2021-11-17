class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :risk_profile, :username, :password_digest

  has_many :user_preferences
end
