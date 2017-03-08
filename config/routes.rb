Rails.application.routes.draw do
  root 'splash#home'
  get '/lineup', to: 'splash#lineup', as: 'lineup'
  get '/tickets', to: 'splash#tickets', as: 'tickets'
  get '/directions', to: 'splash#directions', as: 'directions'
  get '/gallery', to: 'splash#gallery', as: 'gallery'
  get '/press', to: 'splash#press', as: 'press'
  get '/contact', to: 'splash#contact', as: 'contact'
  get '/lodging', to: 'splash#lodging', as: 'lodging'
  get '/artist-bios', to: 'splash#bios', as: 'bios'
  get '/shuttle', to: 'splash#shuttle', as: 'shuttle'
  get '/faq', to: 'splash#faq', as: 'faq'
  get '/terms', to: 'splash#terms', as: 'terms'
  get '/past-lineup', to: 'splash#past-lineup', as: 'past-lineup'
  get '/suscribe', to: 'splash#suscribe', as: 'suscribe'
  get '/send_contact', to: 'splash#send_contact', as: 'send_contact'
  get '/rail-jam', to: 'splash#rail-jam', as: 'rail-jam'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
