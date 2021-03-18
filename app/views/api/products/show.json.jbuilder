json.product do 
    json.partial! '/api/products/product', product: @product
    json.seller do
        json.extract! @product.seller, :id, :first_name
    end
    json.photoUrls @product.photos.map { |file| url_for(file) }
    json.reviewIds @product.reviews.pluck(:id)
    json.average_rating @product.average_rating
end

@product.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.authors do
    json.set! review.author.id do
      json.extract! review.author, :id, :first_name
    end
  end
end

