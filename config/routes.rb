Rails.application.routes.draw do
  # scope '/api' do
    resources :users
    resources :clients
    post '/login' => 'sessions#create'
    get '/profile' => 'users#profile'
    delete '/logout' => 'sessions#destroy'
  # end
end
