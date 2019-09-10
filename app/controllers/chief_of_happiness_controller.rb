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

      # @competitionsCompetitor = competitionsCompetitor.each{ |cc|
      #   item = Item.where(id: cc[:itemKey]).first

      #   itemExtras = ItemExtra.where(itemKey: item.id)
      #   puts itemExtras

        
      #   availableCompetitors = AvailableCompetitor.where(itemKey: item.id)
      #   puts availableCompetitors
        
      #   competitors = availableCompetitors.each{|competitor|
      #     Competitor.where(id: competitor.competitorKey)
      #   }
      #   puts competitors

      #   {
      #     itemId: item.id,
      #     itemName: item.name,
      #     extras: itemExtras,
      #     competitors: availableCompetitors
      #   }
      # }
      
    end
  end
end
