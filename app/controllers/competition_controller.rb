class CompetitionController < ApplicationController
  def index
    @competitions = Competition.all
    @competitionsMap = @competitions.map { |competition|
      itemKeys = Item.where()
    }
    
  end

  def create
    itemKeys = params[:itemKeys]
    competition = Competition.create({})

    itemKeys.each { |itemKey|
      CompetitionCompetitor.create({
        competitionKey: competition.id,
        itemKey: itemKey
      })
    }
  end
  
  def update
    items = params[:items]
    puts items
    items.each{ |itemKey, ids|
      puts "competition : #{itemKey} competitor : #{ids}"
      @competition = CompetitionCompetitor.find_by(itemKey: itemKey)
      @competition.update(competitorKey: ids[:competitor], extraKey: ids[:extra])
    }
  end

  def show
    @competitions = Competition.all
  end
end
