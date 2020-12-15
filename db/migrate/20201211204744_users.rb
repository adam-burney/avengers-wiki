class Users < ActiveRecord::Migration[6.0]
  def change
      create_table :users do |t|
      t.column :firstname, :string, :null => false
      t.column :lastname, :string, :null => false
      t.column :email, :string, :null => false
      t.column :created_at, :timestamp
      t.column :updated_at, :timestamp
    end
  end

  def down
     drop_table :users
  end
end
