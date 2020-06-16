class BookingsController < ApplicationController

    def create 
        booking = Booking.create({
            user_id: params[:user_id],
            pet_id: params[:pet_id],
            services: params[:services],
            fee: params[:fee],
            location: params[:location],
            number_days: params[:number_days]

        })
        user = User.find(params[:user_id])
        render json: user

    end


    def index
        bookings = Booking.all
        render json: bookings
    end

end
