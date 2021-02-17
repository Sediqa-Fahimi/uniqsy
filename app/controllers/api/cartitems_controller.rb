class Api::CartitemsController < ApplicationController
    def create
        @cartitem = CartItem.find_by(product_id: params[:cartitem][:product_id])
        if @cartitem

        else
            @cartitem = CartItem.new(cartitem_params)
            if @cartitem.save
                render 
        end
    end

    def index
    end
    def update
    end
    def destroy
    end

    private

    def cartitem_params
        params.require(:cartitem).permit(:product_id, :user_id, :quantity)
    end
end
