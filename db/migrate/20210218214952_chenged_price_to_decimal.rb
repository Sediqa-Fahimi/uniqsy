class ChengedPriceToDecimal < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :price, :decimal, :precision => 8, :scale => 2
    add_index :products, :title
  end
end
