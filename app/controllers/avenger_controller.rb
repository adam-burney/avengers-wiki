class AvengerController < ApplicationController
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
	avenger = Avenger.create!(avenger_params)
    if avenger
      render json: {msg: "New avenger with id: " + avenger.id.to_s + " created"} 
    else
      render json: avenger.errors
    end
	
  end
  
  def update
	avenger = Avenger.find_by(id: params[:id])
	
    if avenger
      avenger.update!(avenger_params)
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
  # Allowed parameters to protect the database
  private
  def avenger_params
    params.permit(:super_hero_name, :real_name, :status, :age, :description)
  end

  def render_json_not_found(id)
      if id
	    render json: {error: "Avenger with id: " + id + " not found"}
      else
        render json: {error: "update action: Expected URL with /:id "}
      end
  end

end
