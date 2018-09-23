class User < ApplicationRecord
  has_secure_password
  validates_uniqueness_of :email, true
  has_many :clients
end
