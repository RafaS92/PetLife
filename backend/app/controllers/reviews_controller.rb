class ReviewsController < ApplicationController

    def create

        review = Review.create({
            user_id: params[:user_id],
            username: params[:username],
            text: params[:text],
            image: params[:image],
            
        })
        
        render json: review

    end

    def index

        reviews = Review.all
        render json: reviews
    end

end
