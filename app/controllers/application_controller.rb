class ApplicationController < ActionController::Base
  # WARNING: Data can be deleted with no authentification!
  # TODO check rails login features
  #protect_from_forgery with: :exception
  protect_from_forgery with: :null_session
end
