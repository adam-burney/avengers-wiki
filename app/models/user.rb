class User < ApplicationRecord
  has_secure_password # Add the built-in authenticate method to the model
  
  validates :email, presence: true, uniqueness: true
  validates :firstname, presence: true
  validates :lastname, presence: true
  # Warning! Uniqueness can be violated with multiple connexions
  # See: https://guides.rubyonrails.org/active_record_validations.html#uniqueness

  before_save :before_save_callback

  def before_save_callback
    self.email.downcase! # the email is used as a username, enforce lower case 
    self.rights_group = 'contributor' unless self.rights_group # Default rights group
    self.rights_group.downcase!
  end
end
