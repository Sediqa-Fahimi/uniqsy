class Api::SessionsController < ApplicationController
    before_action :require_login, only: [:destroy]

    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
        if @user
            login(@user)
            render :show
        else
            render json: ["Invalid credentials"], status: :unprocessable_entity
        end
    end

    def destroy
        logout
        render json: {}
    end
end
