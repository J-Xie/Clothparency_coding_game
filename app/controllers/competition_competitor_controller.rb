class CompetitionCompetitorController < ApplicationController
  def index
    @competition = Competition.last
    if @competition
      competitionCompetitors = CompetitionCompetitor.where(competitionKey: @competition.id)

      @competitionsMap = competitionCompetitors.map { |cc|
        extra = ItemExtra.where(id: cc.extraKey)
        extraName = ''
        if extra.exists?
          extraName = extra.first.name
        end
        {
          id: cc.id,
          itemName: Item.where(id: cc.itemKey).first.name,
          extraName: extraName,
          competitorName: Competitor.where(id: cc.competitorKey).first.name
        }
      }
    end
  end

  def create
    list = params[:list]
    list.each{ |item|
      if Item.where(name: item).empty?
      else
        CompetitionCompetitor.create({
          itemKey: Item.where(name: item).first.id,
          competitorkey: -1
        })
      end
    }
  end
  
  def update
    list = params[:list]
    list.each{ |competition, competitor|
      @competition = Competition.find_by(itemName: competition)
      @competition.update(competitorName: competitor)
    }
  end

  def show

  end
end
