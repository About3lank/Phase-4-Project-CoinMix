Rails.application.routes.draw do
  resources :coins
  resources :user_coins
  resources :preferences
  resources :user_preferences
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/hello", to: "application#hello_world" 
  
end
