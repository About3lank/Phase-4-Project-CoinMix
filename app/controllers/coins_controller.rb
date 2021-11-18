class CoinsController < ApplicationController
    def index
        coins = Coin.all
        render json: coins, status: :ok
    end

    private

    def authorize_user
        
    end


end
