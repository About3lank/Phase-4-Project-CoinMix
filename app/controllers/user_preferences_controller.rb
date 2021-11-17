class UserPreferencesController < ApplicationController
    def index
        user_preferences = UserPreference.all
        render json: user_preferences, status: :ok
    end
end
