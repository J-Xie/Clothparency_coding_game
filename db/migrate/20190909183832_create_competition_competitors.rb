class CreateCompetitionCompetitors < ActiveRecord::Migration[6.0]
  def change
    create_table :competition_competitors do |t|
      t.integer :competitionKey
      t.integer :itemKey
      t.integer :competitorKey

      t.timestamps
    end
  end
end
