class CreateRiskProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :risk_profiles do |t|
      t.integer :risk_score
      t.integer :user_id
      t.integer :allocation_id

      t.timestamps
    end
  end
end
