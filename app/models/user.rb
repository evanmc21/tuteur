class User < ApplicationRecord
  validates_uniqueness_of :email
  has_secure_password
  has_secure_token :auth_token
  has_many :clients

  # define methods on user objects in user model

  def invalidate_token
    self.update_columns(auth_token: nil)
  end

  def self.validate_login(email, password)
    user = find_by(email: email)
    if user && user.authenticate(password)
      user
    end
  end
  
end
