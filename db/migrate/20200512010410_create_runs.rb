class CreateRuns < ActiveRecord::Migration[5.2]
  def change
    create_table :runs do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :start_time, null: false
      t.string :start_location, null: false
      t.integer :distance, null: false
      t.belongs_to :group, null: false

      t.timestamps null: false
    end
  end
end
