class CoinsController < ApplicationController

    skip_before_action :confirm_authentication

    def index
        coins = Coin.all
        render json: coins, status: :ok
    end

    private

    def authorize_user
        
    end


end
