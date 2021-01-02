require 'find'

class AvengerController < ApplicationController
  # TODO Rights management
  # After login, we should ask the user controller if the user email
  # has been verified before giving access to creating or editing a record

  # Short list for home page
  def index
    render json: Avenger.all, only: [:url_string, :super_hero_name, :real_name, :status]
  end

  # For creation tool
  def list 
    render json: Avenger.all, only: [:url_string, :super_hero_name]
  end

  # All info for one avenger
  def show
	  avenger = Avenger.find_by(url_string: params[:s_url])
	  if avenger
	    render json: avenger, only: [:super_hero_name, :real_name, :age, :status, :description]
  	else
      render_json_not_found(params[:s_url])
  	end
  end
  
  # Create an avenger
  def create
	avenger = Avenger.create(db_params)

    if avenger.errors.empty?
      render json: {msg: "New avenger with url /" + avenger.url_string + " created"} 
    else
      render json: {error: "Creation failed with error code: " + avenger.errors.as_json(full_messages: true).to_s}
    end	
  end
  
  # Update an avenger's info
  def update
	avenger = Avenger.find_by(url_string: params[:s_url])
    if avenger
      avenger.update(db_params)

      if avenger.errors.empty?
        render json: {msg: avenger.super_hero_name + " updated"}
      else
        render json: {error: "Update failed with error code: " + avenger.errors.as_json(full_messages: true).to_s}
      end
    else
      render_json_not_found(params[:s_url])
    end
  end

  # Destroy an avenger :(
  def destroy
    avenger = Avenger.find_by(url_string: params[:s_url])
  	if avenger
	    avenger.destroy
      render json: {msg: avenger.super_hero_name + " destroyed"}
	  else
	    render_json_not_found(params[:s_url])
  	end
  end

  # These specific actions to send the hero and character images is optimal for the needs of
  # this project. However, for a website that would get bigger, it would make more sense if 
  # every image linked to a model has only a url saved in the records. Then, a generic media
  # controller with for example: images, audio_files, and videos... actions is created.
  # With a media controller, we dont need to create multiple specific actions like this one
  # and it makes less code to write, review and debug.

  # Get the hero image
  def heroimg
    get_image(params[:s_url], "_hero")
  end

  # Get the character image
  def charimg
    get_image(params[:s_url], "_char")
  end

  #------------------ 
  private
  
  # Allowed parameters to protect the database
  def db_params
    # Including the *_img URLs allows the UI to set them.
    # From example : "https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend"
    # It is more a backend job, but at least it would not corrupt the database...
    #params.permit(:super_hero_name, :real_name, :age, :description, hero_img, no_suit_img)
    params.permit(:super_hero_name, :real_name, :age, :status, :description)
  end

  def render_json_not_found(str)
      if str.class == String
	      render json: {error: str + " not found in database"}
      else
        render json: {error: "Expected URL with /:avenger_hero_name"}
      end
  end
  
  def get_image(url_str, sfx)
    avenger = Avenger.find_by(url_string: url_str)
    if avenger
      # filename with suffix "_hero" (with hero suit) or "_character" (casual)
      filename = url_str + sfx
      img_root = Rails.root.join("public", "images", "avengers")
      path_output = find_local_file(filename, img_root)
      
      if path_output
        img_path = path_output.to_s
      else
        # TODO The image directory should be specified in an environment variable
        img_path = Rails.root.join("public", "images", "no_image.png")  # Default image
      end

      send_file img_path, type: "image/" + File.extname(img_path), disposition: "inline"
  	else
      render_json_not_found(url_str)
  	end
  end
  
  # Find the first file with a matching name in the specified directory
  # regardless of the extension and return the path (recursive search)
  # IMPORTANT NOTE: Running this script increases server ressources usage 
  # significantly compared to a direct file system access with a complete
  # path including the extension (no search)
  def find_local_file(filename, in_dir)
    Find.find(in_dir) do |path|
      unless FileTest.directory?(path)
        if File.basename(path, ".*") == filename
          return path
        end
      end
    end
    # If we get here, no file is found...
    return nil
  end

end
