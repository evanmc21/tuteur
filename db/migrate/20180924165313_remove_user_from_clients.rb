class RemoveUserFromClients < ActiveRecord::Migration[5.2]
  def change
    remove_column :clients, :user_id, :reference
  end
end
