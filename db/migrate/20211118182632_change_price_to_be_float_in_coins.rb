class ChangePriceToBeFloatInCoins < ActiveRecord::Migration[6.1]
  def change
    change_column :coins, :price, :float
  end
end
