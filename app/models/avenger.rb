class Avenger < ApplicationRecord
  # Warning! Uniqueness can be violated with multiple connexions
  # See: https://  guides.rubyonrails.org/active_record_validations.html#uniqueness
  validates :super_hero_name,  presence: true
  validates :url_string,       presence: true,  uniqueness: true
  attribute :status, :string

  before_validation :generate_url_string
  before_create :before_create_callback
  before_save :before_save_callback
  after_find :after_find_callback
  
  #--------------
  private

  def generate_url_string   
      self.url_string = self.super_hero_name.downcase.gsub(' ','_') if self.super_hero_name
  end

  # Find callback: called when new is used or any load from the database
  # It is done "right after" find (before the controller renders any data to the UI)
  def after_find_callback
    if self.active == true
      self.status = "active"
    else
      self.status = "retired"
    end
  end
 
  def before_create_callback
    initialize_strings(['real_name', 'age', 'description'])
  end
  
  # replace nil values by empty strings
  def initialize_strings(string_attributes)
    string_attributes.each do |attr_name|
      if read_attribute(attr_name) == nil
        write_attribute(attr_name, '')
      end
    end
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
