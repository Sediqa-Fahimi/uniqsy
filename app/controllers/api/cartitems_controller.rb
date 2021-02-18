class Api::CartitemsController < ApplicationController
    
    def index
        if logged_in?
            @cartitems = Cartitem.all.select{|item| item.user_id == current_user.id }
            render 'api/cartitems/index'
        else
            require_login
        end
    end

    def create
        @cartitem = CartItem.new(cartitem_params)
        if @cartitem.save && logged_in?
            @cartitems = CartItem.all.select{ |item| item.user_id == current_user.id }
            render :index
        else
            render json: @cartitem.errors.full_messages, status: 404
        end 
    end

 
    def destroy
        if logged_in?
            @cartitem = CartItem.find_by(id: params[:id])
            @cartitem.destroy
            @cartitems = CartItem.all.select{ |item| item.user_id == current_user.id }
            render :index
        else
            require_login
        end
            
    end

    private

    def cartitem_params
        params.require(:cartitem).permit(:product_id, :user_id)
    end
end
