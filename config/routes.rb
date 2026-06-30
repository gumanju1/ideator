Rails.application.routes.draw do
  
  get "up" => "rails/health#show", as: :rails_health_check
  root 'ideas#index'

  resources :ideas
end
