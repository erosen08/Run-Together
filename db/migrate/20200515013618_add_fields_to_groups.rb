class AddFieldsToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :difficulty, :string
    add_column :groups, :zip, :string, null: false
  end
end
