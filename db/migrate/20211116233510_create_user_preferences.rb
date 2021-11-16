class CreateUserPreferences < ActiveRecord::Migration[6.1]
  def change
    create_table :user_preferences do |t|
      t.integer :user_id
      t.integer :preference_id
      t.integer :choice_value

      t.timestamps
    end
  end
end
