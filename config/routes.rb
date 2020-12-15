# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  # home
  #get 'home/index'
  get 'home/timestamp'

  # avenger
  get 'avenger/erbshow'
  get 'avenger/preview'
  resources :avenger

  # user
  get 'user', to: 'user#index'
  post 'user', to: 'user#create'
  get 'user(/:id)', to: 'user#show'
  patch 'user(/:id)', to: 'user#update'
  put 'user(/:id)', to: 'user#update'
  delete 'user(/:id)', to: 'user#destroy'


  #root
  root 'home#index'
end
