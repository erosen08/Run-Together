class Api::V1::WeatherController < ApplicationController

  def index
    lat = params[:lat]
    lon = params[:lon]

    api_key = ENV['OPEN_WEATHER_API_KEY']
    url = "http://api.openweathermap.org/data/2.5/weather?lat=#{lat}&lon=#{lon}&appid=#{api_key}"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)

    render json: parsed_response, status: 200
  end
end
