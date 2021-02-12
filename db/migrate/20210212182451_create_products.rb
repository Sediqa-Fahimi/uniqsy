class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.text :title, null: false
      t.float :price, null: false
      t.text :description, null: false
      t.integer :seller_id, null: false
      t.timestamps
    end
    add_index :products, :seller_id
  end
end
