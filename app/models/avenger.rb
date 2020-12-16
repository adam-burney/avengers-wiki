class Avenger < ApplicationRecord
  # Warning! Uniqueness can be violated with multiple connexions
  # See: https://  guides.rubyonrails.org/active_record_validations.html#uniqueness
  validates :super_hero_name, presence: true, uniqueness: true
  attribute :status, :string

  before_save :before_save_callback
  after_find :after_find_callback

  private

  # Find callback: called when new is used or any load from the database
  # It is done "right after" find (before the controller renders any data to the UI)
  def after_find_callback
    if self.active == true
      self.status = "active"
    else
      self.status = "retired"
    end
    Rails.logger.debug "TEST: End of after_find_callback self.status=" + self.status.to_s
  end
  
  # Save callback: called when create or update is used, just before the operation
  # so self.active is written to the database
  #
  # 1. The ORM need to create an object before doing any operation. Consequently, if we 
  #    try to manage the "nil" case (no status input) in the after_initialize callback
  #    It will be called during the record creation process and the input parameters 
  #    sent in the POST request CANNOT overwrite it. We have to manage the nil case here.
  # 2. The after_find callback is executed during an update operation so status
  #    has a value an it CAN be overwritten in this case
  def before_save_callback
    if self.status == "active" or self.status == nil
      self.active = true
    else
      self.active = false
    end
  end

end
