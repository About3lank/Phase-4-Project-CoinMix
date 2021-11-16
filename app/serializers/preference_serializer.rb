class PreferenceSerializer < ActiveModel::Serializer
  attributes :id, :question, :choice_1, :choice_2, :choice_3, :choice_4, :choice_5
end
