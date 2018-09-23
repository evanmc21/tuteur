Rails.application.routes.draw do
  scope '/api' do
    resources :clients
    post 'user_token' => 'user_token#create'
  end
end
