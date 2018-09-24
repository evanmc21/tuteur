class ClientsController < ApplicationController
  before_action :require_login

  def index
      @user = current_user
      @clients = @user.clients
      render json: @clients
  end

  def show
    @user = current_user
    @client = @user.clients.find(params[:id])
    render json: @client
  end

  def create
    @client = Client.new(client_params)
    @client.user = current_user
    if @client.save
      render json: @client, status: :created
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  def update
    if @client.update(client_params)
      render json: @client
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = current_user
    @client = @user.clients.find(params[:id])
    @client.destroy
    if @client.destroy
      head :no_content, status: :ok
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  private
    def set_client
      @client = Client.find(params[:id])
    end

    def client_params
      params.require(:client).permit(:name, :location, :age, :notes, :school, :rate, :goals, :user_id)
    end
end
