class AddGroupLeaderToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :group_leader_id, :bigint, index: true
  end
end
