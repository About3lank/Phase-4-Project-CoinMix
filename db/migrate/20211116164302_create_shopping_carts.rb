class CreateShoppingCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :shopping_carts do |t|
      t.string :name
      t.integer :coins_id

      t.timestamps
    end
  end
end
