@products.each do |product|
    json.set! product.id do
        json.partial! '/api/products/product', product: product
        json.reviewIds []
    end
end