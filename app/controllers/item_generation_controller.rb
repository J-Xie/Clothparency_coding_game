class ItemGenerationController < ApplicationController
  def index
  end

  def create
    # @pastries = Pastry.all
    puts "AZEAZEAZEAZEAZEAZEAZEAZE"
    puts params
    # puts @pastries
    redirect_to '/'
    # respond_with Pastry.all
    # if params
    #   puts "Received params"
    # else
    #   puts "Didn't Received"
    # end
    # respond_to
  end
end
