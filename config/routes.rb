Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/groups', to: 'static_pages#index'
  get '/groups/new', to: 'static_pages#index'
  get '/groups/:id', to: 'static_pages#index'
  get '/groups/:id/edit', to: 'static_pages#index'
  get '/groups/:id/runs/new', to: 'static_pages#index'
  get '/groups/:id/runs', to: 'static_pages#index'
  get '/groups/:id/runs/:id', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :groups, only: [:index, :show, :create, :update, :destroy] do
        resources :runs, only: [:index, :create]
      end
    end
  end
end
