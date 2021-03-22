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
    
    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:rating, :content, :product_id)
    end
end
