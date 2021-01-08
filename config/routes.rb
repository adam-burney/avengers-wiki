# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do

  # avenger
  get     'avenger/list'
  get     'avenger/heroimg(/:s_url)',  to: 'avenger#heroimg'
  get     'avenger/charimg(/:s_url)',  to: 'avenger#charimg'
  get     'avenger',                 to: 'avenger#index'
  post    'avenger',                 to: 'avenger#create'
  get     'avenger(/:s_url)',          to: 'avenger#show'
  patch   'avenger(/:s_url)',          to: 'avenger#update'
  put     'avenger(/:s_url)',          to: 'avenger#update'
  delete  'avenger(/:s_url)',          to: 'avenger#destroy'

  # user
  get     'user',        to: 'user#index'
  post    'user',        to: 'user#create'
  get     'user(/:id)',  to: 'user#show'
  patch   'user(/:id)',  to: 'user#update'
  put     'user(/:id)',  to: 'user#update'
  delete  'user(/:id)',  to: 'user#destroy'

  # Timestamp debug action
  get  'home/timestamp'

  # Root and redirect for unknown routes
  root 'home#index'
  get '*path' => redirect('/')
end
