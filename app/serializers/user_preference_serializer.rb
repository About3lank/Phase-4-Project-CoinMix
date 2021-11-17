class UserPreferenceSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :preference_id, :choice_value

  belongs_to :preference
end
