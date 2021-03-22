Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    resources :cartitems, only: [:create, :index, :destroy, :update]
    resources :reviews, only: [:create, :destroy]
  end
  
end
