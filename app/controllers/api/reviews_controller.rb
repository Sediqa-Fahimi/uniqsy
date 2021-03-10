class Api::ReviewsController < ApplicationController
    before_action :require_login

    def create
        @review = current_user.reviews.new(review_params)

        if @review.save
            render :show
        else
            render json: @review, status: :unprocessable_entity
        end
    end

    private

    def review_params
        params.require(:review).permit(:rating, :content, :product_id)
    end
end
