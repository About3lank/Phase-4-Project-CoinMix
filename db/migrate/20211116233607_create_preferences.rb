class CreatePreferences < ActiveRecord::Migration[6.1]
  def change
    create_table :preferences do |t|
      t.text :question
      t.text :choice_1
      t.text :choice_2
      t.text :choice_3
      t.text :choice_4
      t.text :choice_5

      t.timestamps
    end
  end
end
