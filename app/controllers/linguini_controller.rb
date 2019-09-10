class LinguiniController < ApplicationController
  def index
    @items = Item.all
  end
  def show
  end
end
