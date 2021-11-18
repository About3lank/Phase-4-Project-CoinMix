class RemoveCategoryFromCoins < ActiveRecord::Migration[6.1]
  def change
    remove_column :coins, :category, :string
  end
end
