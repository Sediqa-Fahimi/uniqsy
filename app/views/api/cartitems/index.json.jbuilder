@cartitems.each do |item|
    json.set! item.id do
        json.extract! item, :id, :product_id, :user_id
        json.product item.product
    end
end