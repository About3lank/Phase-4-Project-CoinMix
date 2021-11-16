class CreateAllocations < ActiveRecord::Migration[6.1]
  def change
    create_table :allocations do |t|
      t.integer :high_risk_mix
      t.integer :medium_risk_mix
      t.integer :low_risk_mix

      t.timestamps
    end
  end
end
