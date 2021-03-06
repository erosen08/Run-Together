class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :description, null: false

      t.timestamps null: false
    end

    add_index :groups, :name, unique: true
  end
end
