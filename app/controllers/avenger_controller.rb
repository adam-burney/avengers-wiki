class AvengerController < ApplicationController
  # TODO Rights management
  # After login, we should ask the user controller if the user email
  # has been verified before giving access to creating or editing a record

  # Debug preview using ERB
  def erbshow
    @avengers = Avenger.all
  end

  # Short list for home page
  def preview
    #logger.info("Parameters:" + params.to_s)	
    render json: Avenger.all, only: [:id, :super_hero_name, :real_name, :status]
  end

  def index 
    render json: Avenger.all, only: [:id, :super_hero_name]
  end

  def show
	avenger = Avenger.find_by(id: params[:id])
	if avenger
	  render json: avenger
	else
      render_json_not_found(params[:id])
	end
  end
  
  def create
	avenger = Avenger.create!(db_params)
    if avenger
      #avenger.update(to_active(params[:status]))
      render json: {msg: "New avenger with id: " + avenger.id.to_s + " created"} 
    else
      render json: avenger.errors
    end
	
  end
  
  def update
	avenger = Avenger.find_by(id: params[:id])
    if avenger
      avenger.update(db_params)
      #avenger.update(to_active(params[:status]))
      render json: {msg: avenger.super_hero_name + " updated"} 
    else
      render_json_not_found(params[:id])
    end
  end

  def destroy
	avenger = Avenger.find_by(id: params[:id])
	if avenger
	  avenger.destroy
      render json: {msg: avenger.super_hero_name + " destroyed"}
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
  def db_params
    # Including the *_img URLs allows the UI to set them.
    # From example : "https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend"
    # It is more a backend job, but at least it would not corrupt the database...
    #params.permit(:super_hero_name, :real_name, :age, :description, hero_img, no_suit_img)
    params.permit(:super_hero_name, :real_name, :age, :status, :description)
  end

  def render_json_not_found(id)
      if id
	    render json: {error: "Avenger with id: " + id + " not found"}
      else
        render json: {error: "update action: Expected URL with /:id "}
      end
  end

end
