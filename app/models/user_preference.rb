class UserPreference < ApplicationRecord
    belongs_to :user
    belongs_to :preference
    
    validates :choice_value, numericality: {greater_than_or_equal_to:1,less_than_or_equal_to:5}
end
