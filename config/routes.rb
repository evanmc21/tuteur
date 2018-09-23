Rails.application.routes.draw do
  resources :users
  scope '/api' do
    resources :clients
  end
end
