# Methods specifying how to manage JSON web token for this API
# Using jwt gem
# lib/json_web_token.rb

class JsonWebToken
  class << self
    def encode(payload, exp = 24.hours.from_now)
      payload[:exp] = exp.to_i
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end
 
    def decode(token)
      rails_key = Rails.application.secrets.secret_key_base
      body = JWT.decode(token, rails_key)[0]
      HashWithIndifferentAccess.new body
    rescue StandardError => e
      Rails.logger.info("[JsonWebToken] ERROR! " + e.to_s)
      return nil
    rescue
      Rails.logger.info("[JsonWebToken] UNKNOWN ERROR!")
      return nil
    end
  end
 end