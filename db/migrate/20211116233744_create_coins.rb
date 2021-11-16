class CreateCoins < ActiveRecord::Migration[6.1]
  def change
    create_table :coins do |t|
      t.string :name
      t.integer :price
      t.integer :volume
      t.integer :market_cap
      t.integer :risk_level
      t.string :category

      t.timestamps
    end
  end
end
