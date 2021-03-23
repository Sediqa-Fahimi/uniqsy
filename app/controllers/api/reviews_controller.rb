class Api::ReviewsController < ApplicationController
    before_action :require_login, only: [:create, :destroy, :update]

    def create
        @review = current_user.reviews.new(review_params)

        if @review.save
            render :show
        else
            render json: @review, status: :unprocessable_entity
        end
    end

    def update
        @review = current_user.reviews.find_by(id: params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        if @review
            @review.destroy
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
