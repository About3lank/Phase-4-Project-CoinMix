class PreferencesController < ApplicationController
    def index
        preferences = Preference.all
        render json: preferences, status: :ok
    end
end
