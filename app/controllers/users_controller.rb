class UsersController < ApplicationController
  before_action :require_login, except: [:create]


  def create
    user = User.create!(user_params)
    render json: { token: user.auth_token}
  end

  def profile
    user = User.find_by_auth_token!(request.headers[:token])
    user_clients = user.clients
    render json: { user: { email: user.email }, clients: user_clients }
  end

  private

    def user_params
      params.require(:user).permit(:email, :password)
    end
end
