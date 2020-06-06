Rails.application.routes.draw do
  resources :reviews
  resources :pets
  resources :bookings
  resources :users
  post('/login', to: 'authentication#login')
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
