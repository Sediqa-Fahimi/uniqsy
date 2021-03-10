# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  content    :text             default("")
#  rating     :integer          not null
#  product_id :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :rating, inclusion: { in: (1..5) }

    belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product  

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
