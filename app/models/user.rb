# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :first_name, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    has_many :products,
    foreign_key: :seller_id,
    class_name: :Product

    has_many :cartitems,
    foreign_key: :user_id,
    class_name: :CartItem

    has_many :products,
    through: :cartitems,
    source: :product

    has_many :reviews,
    foreign_key: :author_id,
    class_name: :Review
    
    has_one_attached :image
    
    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, pw)
        user = User.find_by(email: email)
        if user && user.is_password?(pw)
            user
        else
            nil
        end
    end
    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end
    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end
    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
end
