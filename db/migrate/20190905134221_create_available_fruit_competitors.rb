class CreateAvailableFruitCompetitors < ActiveRecord::Migration[6.0]
  def change
    create_table :available_fruit_competitors do |t|
      t.integer :fruitKey
      t.integer :competitorKey

      t.timestamps
    end
  end
end
