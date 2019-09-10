class CreateCompetitions < ActiveRecord::Migration[6.0]
  def change
    create_table :competitions do |t|
      t.integer :name_id
      t.string :name
      t.string :competitor

      t.timestamps
    end
  end
end
