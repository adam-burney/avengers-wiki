class Avengers < ActiveRecord::Migration[6.0]
  def change
    create_table :avengers do |t|
      t.column :super_hero_name,  :string,  :null => false
      t.column :url_string,       :string
      t.column :real_name,        :string
      t.column :active,           :boolean
      t.column :age,              :string
      t.column :description,      :text
      t.column :created_at,       :timestamp
      t.column :updated_at,       :timestamp
    end
  end
end
