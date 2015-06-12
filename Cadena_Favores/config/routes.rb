Rails.application.routes.draw do
  get '/' => "chains#landing", as: "root"
  get '/chains/map' => "chains#map", as: 'map'

  resources :chains do
    resources :userposts
  end 
end
