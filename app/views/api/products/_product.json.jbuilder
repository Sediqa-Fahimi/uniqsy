json.extract! product, :id, :title, :price, :description, :seller_id
json.photoUrl url_for(product.index_photo)