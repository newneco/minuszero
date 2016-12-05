Rails.application.routes.draw do
  root 'splash#home'
  get '/previous', to: 'splash#previous', as: 'previous'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
