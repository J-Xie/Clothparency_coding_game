class CompetitionCompetitorController < ApplicationController
  def index
    @competition = Competition.last
    if @competition
      competitionCompetitors = CompetitionCompetitor.where(competitionKey: @competition.id)

      @competitionsMap = competitionCompetitors.map { |cc|
        extra = ItemExtra.where(id: cc.extraKey)
        extraName = ''
        if extra.exists?
          puts extra
          extraName = extra.first.name
        end
        {
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
        puts "::: No record in Pastry for #{item} :::"
      else
        puts Item.where(name: item).first.id
        CompetitionCompetitor.create({
          itemKey: Item.where(name: item).first.id,
          competitorkey: -1
        })
      end
    }
  end
  
  def update
    list = params[:list]
    puts list
    list.each{ |competition, competitor|
      puts "competition : #{competition} competitor : #{competitor}"
      @competition = Competition.find_by(itemName: competition)
      @competition.update(competitorName: competitor)
    }
  end

  def show
    
  end
end
