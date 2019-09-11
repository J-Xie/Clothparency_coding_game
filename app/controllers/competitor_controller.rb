class CompetitorController < ApplicationController
  def index
    competitors = Competitor.all
    @competitors = competitors.map { |competitor|
      availableCompetitors = AvailableCompetitor.where(competitorKey: competitor.id).pluck('itemKey')
      itemRows = Item.where(id: availableCompetitors)
      
      {
        id: competitor.id,
        name: competitor.name,
        items: itemRows
      }
    }  
  end

  def create
  end
end
