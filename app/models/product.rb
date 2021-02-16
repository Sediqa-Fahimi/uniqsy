class Product < ApplicationRecord
    validates :title, :price, :description, :seller_id, presence: true

    belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User

    has_one_attached :photo
    
end
