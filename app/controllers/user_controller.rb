class UserController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]

  #----------------------
  # Action(s) done WITHOUT authentication token
  def create    
    if User.exists?(email: params[:email])
      render json: {error: "user_exists=true", email: params[:email]}
    else
      # *See before_save_callback in user model
      user = User.create!(create_params)
      if user
        command = AuthenticateUser.call(user.email, user.password) 
        msg_str = "New user with id: " + user.id.to_s + " created"
        render json: {msg: msg_str, auth_token: command} 
      else
        render json: user.errors
      end
    end
  end

  #----------------------
  # Actions done with authentication token

  def index
    if @current_user.rights_group == 'admin'
      render json: User.all, only: [:id, :email, :firstname, :lastname, :rights_group]
    else
      render json: { error: 'Not Authorized' }, status: 401
    end
  end

  def show
    unless action_permitted_for(params[:id])
      render json: { error: 'Not Authorized' }, status: 401
      return
    end

    user = User.find_by(id: params[:id])
    if user
      render json: user, only: [:id, :email, :firstname, :lastname]
    else
      render_json_not_found(params[:id])
    end
  end
  
  def update
    unless action_permitted_for(params[:id])
      render json: { error: 'Not Authorized' }, status: 401
      return
    end

	  user = User.find_by(id: params[:id])
    if user
      user.update!(user_params)
      render json: {msg: user.email + " updated"} 
    else
      render_json_not_found(params[:id])
    end
  end

  def set_rights
    if @current_user.rights_group != 'admin'
      logger.info('SECURITY LOG: Unauthorized set_rights action from:' + @current_user.email.to_s)
      render json: { error: 'Not Authorized' }, status: 401
    else
      user = User.find_by(id: params[:id])
      if user
        user.update!(set_rights_params)
        render json: {msg: user.email + " rights updated"} 
      else
        render_json_not_found(params[:id])
      end
    end
  end

  def destroy
    unless action_permitted_for(params[:id])
      render json: { error: 'Not Authorized' }, status: 401
      return
    end

    user = User.find_by(id: params[:id])
    if user
      user.destroy
      render json: {msg: user.email + " destroyed"}
    else
      render_json_not_found(params[:id])
    end
  end
  
  #------------------
  private

  # Allowed parameters to protect the database  
  def user_params
    params.permit(:email, :firstname, :lastname)
  end

  def create_params
    params.permit(:email, :password, :password_confirmation, :firstname, :lastname)
  end

  def set_rights_params
    params.permit(:rights_group)
  end

  # Verify that the authentified user has modification rights for target id
  def action_permitted_for(target_id)   
    # Normal users have rights for themselves only, admin user group have all access
    if (@current_user.id == target_id.to_i  || @current_user.rights_group == 'admin')
      return true 
    else
      logger.info('SECURITY LOG: Unauthorized user update from:' + @current_user.email.to_s)
      return nil
    end
  end

  def render_json_not_found(id)
      if id
	      render json: {error: "User with id: " + id + " not found"}
      else
        render json: {error: "Wrong URL or missing /:id"}
      end
  end
end
