class AddoptionsToQuantityToCartItems < ActiveRecord::Migration[5.2]
  def change
    change_column :cart_items, :quantity, :integer, null: false, default: 1
  end
end
