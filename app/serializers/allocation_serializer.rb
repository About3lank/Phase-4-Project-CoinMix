class AllocationSerializer < ActiveModel::Serializer
  attributes :id, :high_risk_mix, :medium_risk_mix, :low_risk_mix
end
