require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :html

  # protect_from_forgery with: :exception
  def angular
    render 'layouts/application'
  end

  protect_from_forgery with: :exception
  
  respond_to :json
end
