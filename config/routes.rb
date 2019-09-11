Rails.application.routes.draw do
  get 'item/index'
  get 'item/create'
  get 'competitor/index'
  get 'competitor/create'
  get 'competition/index'
  get 'competition/show/:id', to: 'competition#show'

  get 'competition_competitor/index'
  get 'competition_competitor/list'
  get 'competition_competitor/show'

  post 'competition_competitor/create' => 'competition_competitor#create'
  post 'competition_competitor/update' => 'competition_competitor#update'

  post 'competition/create' => 'competition#create'
  post 'competition/update' => 'competition#update'

  get 'chief_of_happiness' => 'chief_of_happiness#index'
  get 'linguini/' => 'linguini#index'
  
  get 'item_generation' => 'item_generation#index'
  post 'item_generation' => 'item_generation#create'
  # post 'item_generation/new' => 'item_generation#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'application#index'
end
