class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :content, default: ""
      t.integer :rating, null: false
      t.integer :product_id, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :reviews, :product_id
    add_index :reviews, :author_id
  end
end
