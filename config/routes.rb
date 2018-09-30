Rails.application.routes.draw do
  # scope '/api' do
    resources :users
    resources :clients
    post '/login' => 'sessions#create'
    get '/profile' => 'users#profile'
    delete '/logout' => 'sessions#destroy'
  # end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
  end
end
