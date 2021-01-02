class HomeController < ApplicationController
  def index
    # If there is ERB code in /app/views/layouts/application.html.erb, any call
    # to the render function here will block the JS app display (see option 1)
    # This line here does the job if the front end server is independant with a different port than Rails
    #render :inline => "<p><%= Time.now.to_s %></p> <p> Avengers Wiki Rails server running </p>"

    # Option 1 (development only): The rails server has a ERB/HTML file "/app/views/layouts/application.html.erb".
    # This ERB code "calls" the React.Js home page and there is also a dummy index ERB file for this controller.

    # Option 2 (production): There is two servers for front and back end that can be restarted individually
    # The application.html.erb file and the home controller can be removed
  end

  def timestamp
    render json: {timestamp: Time.now.to_i}
  end
end
