class UsersController < ApplicationController
    
    skip_before_action :confirm_authentication


    #'/me'
    def show 
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: 'No active session'}, status: :unauthorized
        end
    end

    #'/signup'
    def create 
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json: {error: user.errors}, status: :unprocessable_entity
        end

    end

 
    def index
        users = User.all
        render json: users, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end


end
