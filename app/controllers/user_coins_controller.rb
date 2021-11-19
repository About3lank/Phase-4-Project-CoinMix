class UserCoinsController < ApplicationController

    def index 
        user_coins = UserCoin.all
        render json: user_coins
    end

    def show 
        user_coin = UserCoin.find(params[:id])
        render json: user_coin, status: :ok
    end 

    def create 
        user_coin = current_user.user_coins.create(user_coin_params)
        if user_coin.valid?
            render json: user_coin, status: :created
        else
            render json: user_coin.errors, status: :unprocessable_entity
        end

    end

    def update 
        user_coin = UserCoin.find(params[:id])
        if user_coin.update(update_user_coin_params)
          render json: user_coin, status: :ok
        else
          render json: user_coin.errors, status: :unprocessable_entity
        end

    end

    def destroy 
        UserCoin.find(params[:id]).destroy
    end

    private

    def user_coin_params
        params.permit(:coin_id,:user_id, :amount)
    end

    def update_user_coin_params
        params.permit(:amount)
    end

end
