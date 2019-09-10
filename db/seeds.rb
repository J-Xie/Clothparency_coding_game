# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

items = [
  { name: 'Financier' },
  { name: 'Cookies' },
  { name: 'Corne de gazelle' },
  { name: 'Churros' },
  { name: 'Flan' },
  { name: 'Banane' },
  { name: 'Fraise'},
  { name: 'Pomme' },
]

competitors = [
  { name: 'Antoine' },
  { name: 'Maïa' },
  { name: 'Xavier' },
  { name: 'Matthieu' },
  { name: 'Rym' },
  { name: 'Aran' },
  { name: 'Inès' },
  { name: 'Marguerite' },
  { name: 'Sophie' },
  { name: 'Ahmed' },
  { name: 'Maxime' },
]

availableCompetitors = [
  { item: 'Financier', competitor: 'Antoine' },
  { item: 'Financier', competitor: 'Maïa' },
  { item: 'Cookies', competitor: 'Xavier' },
  { item: 'Cookies', competitor: 'Matthieu' },
  { item: 'Corne de gazelle', competitor: 'Rym' },
  { item: 'Churros', competitor: 'Aran' },
  { item: 'Churros', competitor: 'Inès' },
  { item: 'Flan', competitor: 'Marguerite' },
  { item: 'Banane', competitor: 'Sophie' },
  { item: 'Banane', competitor: 'Ahmed' },
  { item: 'Banane', competitor: 'Maxime' },
  { item: 'Fraise', competitor: 'Sophie' },
  { item: 'Fraise', competitor: 'Ahmed' },
  { item: 'Fraise', competitor: 'Maxime' },
  { item: 'Pomme', competitor: 'Sophie' },
  { item: 'Pomme', competitor: 'Ahmed' },
  { item: 'Pomme', competitor: 'Maxime' },
]

itemExtra = [
  { name: 'Chocolat blanc', item: 'Cookies'},
  { name: 'Chocolat noir', item: 'Cookies'}
]

Item.delete_all
Item.create(items)
Competitor.delete_all
Competitor.create(competitors)
Competition.delete_all
CompetitionCompetitor.delete_all

AvailableCompetitor.delete_all
availableCompetitors.each{|c|
# if !item.where('name=:name', { name: c[:item] }).first.id
#     puts "[AvailableitemCompetitor creation]: Couldn't find this #{c[:item]}"
#   elsif !Competitor.where("name=:name", { name: c[:competitor] }).first.id
#     puts "[AvailableitemCompetitor creation]: Couldn't find this #{c[:competitor]}"
#   end
  AvailableCompetitor.create({
    itemKey: Item.where('name=:name', { name: c[:item] }).first.id,
    competitorKey: Competitor.where('name=:name', { name: c[:competitor] }).first.id
})}

ItemExtra.delete_all
itemExtra.each{|c|
  ItemExtra.create({
    itemKey: Item.where('name=:name', { name: c[:item] }).first.id,
    name: c[:name]
})}
