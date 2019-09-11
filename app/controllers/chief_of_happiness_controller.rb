class ChiefOfHappinessController < ApplicationController
  def index
    @competition = Competition.last
    if @competition
      competitionCompetitors = CompetitionCompetitor.where(competitionKey: @competition.id)
      
      itemKeys = competitionCompetitors.map { |cc| cc.itemKey }
      itemRows = Item.where(id: itemKeys)

      @competitorsMap = {}

      @items = itemRows.map { |item| 
        competitorsId = AvailableCompetitor.where(itemKey: item.id).pluck('competitorKey')
        Competitor.where(id: competitorsId).each { |c| @competitorsMap[c.id] = c }

        {
          id: item.id,
          name: item.name,
          extras: ItemExtra.where(itemKey: item.id),
          competitorsId: competitorsId,
        }
      }
    end
  end
end
