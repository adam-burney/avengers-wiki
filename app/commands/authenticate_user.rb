# File: authenticate_user.rb

class AuthenticateUser
  prepend SimpleCommand

  def initialize(email, password)
    @email = email
    @password = password
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :email, :password

  def user
    # Authenticate the user
    user = User.find_by(email: email)
    return user if user && user.authenticate(password)

    # If authentification fails...
    errors.add :user_authentication, 'invalid credentials'
    return nil
  end
end