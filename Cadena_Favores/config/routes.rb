Rails.application.routes.draw do
  get '/' => "chains#landing", as: "root"
  get '/chains/map' => "chains#map", as: 'map'
  get '/chains/info' => "chains#info", as: 'info'
  get '/chains/chart' => "chains#chart", as: 'chart'
  get '/chains/new' => "chains#new", as: 'new'


  resources :chains do
    resources :userposts
  end 
end
