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
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
