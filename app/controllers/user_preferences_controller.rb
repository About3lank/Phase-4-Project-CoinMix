class UserPreferencesController < ApplicationController
    

    def index
        user_preferences = UserPreference.all
        render json: user_preferences, status: :ok
    end

    def update 
        user_preference = UserPreference.find(params[:id])
        if user_preference.update(update_user_preference_params)
            render json: user_preference, status: :ok
        else 
            render json: user_preference.errors, status: :unprocessable_entity
        end
    end

    private

    def update_user_preference_params
        params.permit(:choice_value)
    end


end
