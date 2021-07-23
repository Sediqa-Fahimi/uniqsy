# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  title       :text             not null
#  description :text             not null
#  seller_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  price       :decimal(8, 2)
#
class Product < ApplicationRecord
    validates :title, :price, :description, :seller_id, presence: true

    belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User

    has_one_attached :index_photo

    has_many_attached :photos

    has_many :carts,
    foreign_key: :product_id,
    class_name: :CartItem

    has_many :buyers,
    through: :carts,
    source: :user
    
    has_many :reviews,
    foreign_key: :product_id,
    class_name: :Review 

    def average_rating
        reviews.average(:rating)
    end

    def total_reviews
        reviews.length
    end
end
