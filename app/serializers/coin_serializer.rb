class CoinSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :volume, :market_cap, :risk_level
end
