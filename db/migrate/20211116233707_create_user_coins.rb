class CreateUserCoins < ActiveRecord::Migration[6.1]
  def change
    create_table :user_coins do |t|
      t.integer :amount
      t.integer :user_id
      t.integer :coin_id

      t.timestamps
    end
  end
end
