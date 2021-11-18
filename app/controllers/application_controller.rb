class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :confirm_authentication







  private
#If same controller uses current_user method more than once, will run find_by query multiple times 
#Use OR operator (which will either grab the current instance of current_user) if it has already been set or to run the initial query if not
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def confirm_authentication
    render json: {error: "You must be logged in to do that."}, status: :unauthorized unless current_user
  end

  
  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }
  # end
end
