class Api::ProductsController < ApplicationController
    def index 
        @products = Product.all
        render :index
    end
    
    def show
        @product = Product.includes(:seller, :photos, :index_photo).find_by(id: params[:id])
        if @product
            render :show
        else
            render json: ["Item does not exist."], status: 404
        end
    end
end
