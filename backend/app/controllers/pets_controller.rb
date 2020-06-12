class PetsController < ApplicationController

    def create
        pet = Pet.create({
            user_id: params[:user_id]
        })
        user = User.find(params[:user_id])
        render json: user
    end

    def index
        pets = Pet.all
        render json: pets
    end

    def show
        pet = Pet.find(params[:id])
    end

end


