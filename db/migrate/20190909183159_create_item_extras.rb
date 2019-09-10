class CreateItemExtras < ActiveRecord::Migration[6.0]
  def change
    create_table :item_extras do |t|

      t.timestamps
    end
  end
end
