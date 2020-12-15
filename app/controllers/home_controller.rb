class HomeController < ApplicationController
  def index
    # When The Rails server is started, 'render plain: "text"' will replace the ReactJS UI
    # and 'render :template => "model/function"' will display at the bottom of ReactJS UI
    # render plain: "string in home_controller.rb"
  end

  def timestamp
    render json: {timestamp: Time.now.to_i}
  end
end
