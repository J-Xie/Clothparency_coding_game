class CompetitionController < ApplicationController
  def index
    competitions = Competition.all
    @competitionsMap = {}
    competitions.map { |competition|
      competitionCompetitors = CompetitionCompetitor.where(competitionKey: competition.id)
      competitions = competitionCompetitors.map { |cc| Item.where(id: cc.itemKey).first }
      @competitionsMap[competition.id] = competitions
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
    puts params
    competition = Competition.where(id: params[:id]).first
    if competition
      competitionCompetitors = CompetitionCompetitor.where(competitionKey: competition.id)

      @competitionsMap = competitionCompetitors.map { |cc|
        puts cc.itemKey
        extra = ItemExtra.where(id: cc.extraKey)
        extraName = ''
        if extra.exists?
          puts extra
          extraName = extra.first.name
        end
        {
          id: cc.id,
          itemName: Item.where(id: cc.itemKey).first.name,
          extraName: extraName,
          competitorName: cc.competitorKey ? Competitor.where(id: cc.competitorKey).first.name : ''
        }
      }
    end
  end
end
