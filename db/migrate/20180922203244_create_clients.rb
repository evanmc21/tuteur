class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :location
      t.integer :age
      t.string :notes
      t.string :school
      t.integer :rate
      t.string :goals

      t.timestamps
    end
  end
end
