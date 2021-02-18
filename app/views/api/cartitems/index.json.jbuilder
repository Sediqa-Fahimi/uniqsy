@cartitems.each do |item|
    json.set! item.id do
        json.extract! item, :id, :product_id, :user_id
        json.extract! item.product, :title, :price, :seller_id
        json.photoUrl url_for(item.product.index_photo)
        json.extract! item.product.seller, :first_name
    end
end