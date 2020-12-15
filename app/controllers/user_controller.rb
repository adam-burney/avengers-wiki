class UserController < ApplicationController
# TODO A find_by_email function will be needed here for login.

  def index 
    render json: User.all, only: [:id, :email]
  end

  def show
	user = User.find_by(id: params[:id])
	if user
	  render json: user, only: [:id, :email, :firstname, :lastname]
	else
	  render_json_not_found(params[:id])
	end
  end
  
  def create
	user = User.create!(user_params)
    if user
      render json: {msg: "New user with id: " + user.id.to_s + " created"} 
    else
      render json: user.errors
    end
	
  end

  def update
	user = User.find_by(id: params[:id])
    if user
      user.update!(user_params)
      render json: {msg: user.email + " updated"} 
    else
      render_json_not_found(params[:id])
    end
  end

  def destroy
	user = User.find_by(id: params[:id])
	if user
	  user.destroy
      render json: {msg: user.email + " destroyed"}
	else
	  render_json_not_found(params[:id])
	end
  end
  
  #------------------

  # Not in API: new and edit actions render HTML forms
  def new
    render plain: "new action not available in API"
  end
  
  def edit
    render plain: "edit action not available in API"
  end

  #------------------
  private

  # Allowed parameters to protect the database  
  def user_params
    params.permit(:email, :firstname, :lastname)
  end

  def render_json_not_found(id)
      if id
	    render json: {error: "User with id: " + id + " not found"}
      else
        render json: {error: "Wrong URL or missing /:id"}
      end
  end
end
