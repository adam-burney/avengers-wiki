class ApplicationController < ActionController::Base
  before_action :authenticate_request
  
  #------------------ 
  # Cross-Site Request Forgery (CSRF) protection
  #   WARNING CSRF protection is off!
  protect_from_forgery  with: :null_session

  #Standard configuration (Full stack Rails application only?)
  #protect_from_forgery with: :exception
  
  #------------------ 

  # When a request is received, Rails creates an independant instance of the child controller.
  # (user_controller, avenger_controller etc.) Consequently, 'current_user' is only the user
  # of the current request.
  attr_reader :current_user

  private
  
  def authenticate_request
    #logger.info("\n[authenticate_request] Function starts...")
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end
end
