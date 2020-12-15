class Avengers < ActiveRecord::Migration[6.0]
  def change
    create_table :avengers do |t|
      t.column :super_hero_name, :string, :null => false
      t.column :real_name, :string
      t.column :status, :boolean
      t.column :age, :text
      t.column :description, :text
      t.column :hero_img, :string
      t.column :no_suit_img, :string
      t.column :created_at, :timestamp
      t.column :updated_at, :timestamp
    end
  end
end
