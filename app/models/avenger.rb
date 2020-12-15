class Avenger < ApplicationRecord
  validates :super_hero_name, presence: true, uniqueness: true
  # Warning! Uniqueness can be violated with multiple connexions
  # See: https://  guides.rubyonrails.org/active_record_validations.html#uniqueness
end
