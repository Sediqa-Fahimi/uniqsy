class RemovePriceFromProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :price 
  end
end
