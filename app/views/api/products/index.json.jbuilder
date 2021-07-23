@products.each do |product|
    json.set! product.id do
        json.partial! '/api/products/product', product: product
        json.reviewIds []
        json.averageRating product.average_rating
        json.totalReviews product.total_reviews
    end
end