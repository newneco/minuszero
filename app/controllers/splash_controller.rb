class SplashController < ApplicationController
  def home
      #open_weather_api = OpenWeatherAPI::API.new api_key: "62bfa8521c1ad8c8e4c86669209ee8d0", default_language: 'en', default_units: 'imperial', default_country_code: 'us'
      
      #@json = open_weather_api.current city: 'New York', country_code: 'us'
      
      #render json: @json["weather"][0]["icon"]
      return
  end

  def lineup
  end

  def tickets
  end

  def lodging
  end

  def directions
  end

  def gallery
  end

  def bios
  end
    
  def press
    #@list_id = "7782aba153"
    #@data = Gibbon::Request.lists(@list_id).members.retrieve()
    #render json: @data
  end
    
  def suscribe
    @list_id = "7782aba153"
    begin
        #require 'Gibbon'
        @data = Gibbon::Request.lists(@list_id).members.create(body: {email_address: "#{params[:email]}", status: "subscribed"})
    rescue
        @data = {:error => "Sorry. We ran into an error with your subscription."}
    end
    
    render json: @data
    return
  end
    
  def send_contact
    @email = params[:email]
    @message = params[:message]
    @subject = params[:subject]
    
    ApplicationMailer.contact_email(@email, @subject, @message).deliver 
    
    render json: @data
    return
  end
  
end