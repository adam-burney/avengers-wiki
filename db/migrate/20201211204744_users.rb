class Users < ActiveRecord::Migration[6.0]
  def change
      create_table :users do |t|
      t.column :email,           :string,     :null => false
      t.column :password_digest, :string
      t.column :firstname,       :string,     :null => false
      t.column :lastname,        :string,     :null => false
      t.column :rights_group,    :string,     :null => false
      t.column :created_at,      :timestamp
      t.column :updated_at,      :timestamp
    end
  end
end
