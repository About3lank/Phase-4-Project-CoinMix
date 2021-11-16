Rails.application.routes.draw do
  resources :allocations
  resources :coins
  resources :shopping_carts
  resources :users
  resources :risk_profiles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/hello", to: "application#hello_world" 
end
