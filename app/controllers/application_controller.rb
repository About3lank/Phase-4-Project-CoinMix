class ApplicationController < ActionController::API
  include ActionController::Cookies
#   rescue_from ActiveRecord::RecordNotFound, with: :not_found

#   before_action :confirm_authentication

  private
  def current_user
    User.first
  end
#     # @current_user ||= User.find_by(id: session[:user_id])
#     # puts "wefgyuwihfoesfgha;iofherhbfekl"
#     puts "FINDING USERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"
#     @current_user ||= User.find_by(id: session[:user_id])



#   end

#   def logged_in?
#     current_user
#   end

#   def confirm_authentication
#     render json: {error: "You must be logged in to do that."}, status: :unauthorized unless logged_in?
#   end

#   # byebug

  
#   # byebug
  
  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }
  # end
end
