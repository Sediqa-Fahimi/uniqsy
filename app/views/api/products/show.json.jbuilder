json.product do 
    json.partial! '/api/products/product', product: @product
    json.seller do
        json.extract! @product.seller, :id, :first_name
    end
    json.photoUrls @product.photos.map { |file| url_for(file) }
end
