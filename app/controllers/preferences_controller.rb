class PreferencesController < ApplicationController

    skip_before_action :confirm_authentication
    
    def index
        preferences = Preference.all
        render json: preferences, status: :ok
    end
end
