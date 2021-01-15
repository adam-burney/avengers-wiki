#------------------------------------------------------------------
#  User controller
# 
#  User rights groups are 'contributor' and 'admin':
#  - All users have complete access the the avenger controller
#  - At account creation, users get in the 'contributor' group by default (see model).
#    Normal users (contributors) can only read or modify their own personnal data.
#  - The right group 'admin' is for the system administrator(s). It gives
#    all access including changing the rights groups of other users with the
#    exception of the password_update action.
#------------------------------------------------------------------
class UserController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]

  #----------------------
  # Action(s) done WITHOUT authentication token
  def create    
    if User.exists?(email: params[:email])
      render json: {error: "user_exists=true", email: params[:email]}
      return  # Get out of here!
    end

    # *See before_save_callback in user model
    user = User.create!(create_params)
    if user
      command = AuthenticateUser.call(user.email, user.password) 
      msg_str = "New user with id: " + user.id.to_s + " created"
      render json: {msg: msg_str, auth_token: command.result} 
    else
      render json: user.errors
    end
  end

  #----------------------
  # Actions done with authentication token

  def index
    if @current_user.rights_group == 'admin'
      render json: User.all, except: [:password_digest]
    else
      render json: { error: 'Not Authorized' }, status: 401
    end
  end
  
  def show
    unless action_permitted_for(params[:id])
      render json: { error: 'Not Authorized' }, status: 401
      return  # Get out of here!
    end

    user = User.find_by(id: params[:id])
    if user
      # The user should have access to all its (readable) information.
      render json: user, except: [:password_digest]
    else
      render_json_not_found(params[:id])
    end
  end
  
  def update
    unless action_permitted_for(params[:id])
      render json: { error: 'Not Authorized' }, status: 401
      return  # Get out of here!
    end

	  user = User.find_by(id: params[:id])
    if user
      user.update!(update_params)
      render json: {success: user.email + " updated"} 
    else
      render_json_not_found(params[:id])
    end
  end

  def password_update
    begin
      user = User.find_by(id: @current_user.id)
      user.update!(password_and_confirmation)
      render json: {success: user.email + " password updated"}

    # Just in case something go wrong, rescue code here.     
    rescue StandardError => e
      Rails.logger.debug('[password_update] e.inspect=' + e.inspect )
      # password and confirmation should be already compared by the UI
      msg = "Not Authorized or unexpected error. Password and confirmation may not match"
      render json: {error: msg}, status: 401
    end
  end

  def set_rights
    if @current_user.rights_group != 'admin'
      logger.info('SECURITY LOG: Unauthorized set_rights action from:' + @current_user.email.to_s)
      render json: { error: 'Not Authorized' }, status: 401
      return  # Get out of here!
    end

    user = User.find_by(id: params[:id])
    if user
      user.update!(set_rights_params)
      render json: {success: user.email + " rights updated"} 
    else
      render_json_not_found(params[:id])
    end
  end

  def destroy
    unless action_permitted_for(params[:id])
      render json: { error: 'Not Authorized' }, status: 401
      return  # Get out of here!
    end

    user = User.find_by(id: params[:id])
    if user
      user.destroy
      render json: {success: user.email + " destroyed"}
    else
      render_json_not_found(params[:id])
    end
  end
  
  #------------------
  private

  # Allowed parameters to protect the database  
  def update_params
    params.permit(:email, :firstname, :lastname)
  end

  def create_params
    params.permit(:email, :password, :password_confirmation, :firstname, :lastname)
  end

  def set_rights_params
    params.permit(:rights_group)
  end

  def password_and_confirmation
    params.permit(:password, :password_confirmation)
  end

  # Verify that the authentified user has modification rights for target id
  def action_permitted_for(target_id)   
    # Normal users have rights for themselves only, admin user group have all access
    if (@current_user.id == target_id.to_i  || @current_user.rights_group == 'admin')
      return true 
    else
      str = 'SECURITY LOG: (user_controller main filter) Unauthorized access '
      logger.info(str + 'from: ' + @current_user.email.to_s)
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
