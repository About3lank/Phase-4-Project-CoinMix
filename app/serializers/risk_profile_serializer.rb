class RiskProfileSerializer < ActiveModel::Serializer
  attributes :id, :risk_score, :user_id, :allocation_id
end
