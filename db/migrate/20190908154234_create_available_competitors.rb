class CreateAvailableCompetitors < ActiveRecord::Migration[6.0]
  def change
    create_table :available_competitors do |t|

      t.timestamps
    end
  end
end
