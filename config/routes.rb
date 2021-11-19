Rails.application.routes.draw do
  resources :coins, only: [:index]
  resources :user_coins
  resources :preferences, only: [:index]
  resources :user_preferences, only: [:index, :update]
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #dont forget to delete this!!!!!!
  # get "/hello", to: "application#hello_world"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
end