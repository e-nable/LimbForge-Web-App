Rails.application.routes.draw do
  resources :terminal_devices
  resources :component_types
  resources :options
  resources :amputation_levels
  resources :components
  devise_for :users
  resources :measurements
  resources :pages
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  devise_scope :user do
    authenticated :user do
      root 'pages#limbforge', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end

  get '/dashboard' => 'pages#dashboard', as: :admin_dashboard
  get '/limbforge' => 'pages#limbforge', as: :limbforge
  get '/search_components' => 'components#search', as: :search_components
  get '/search_measurements' => 'measurements#search', as: :search_measurements
  get '/search_tds' => 'terminal_devices#search', as: :search_tds
  get '/access_requests' => 'pages#dashboard', as: :access_requests
  get '/access_requests/delete' => 'pages#delete_request', as: :delete_request
  get '/access_requests/accept' => 'pages#accept_request', as: :accept_request


  get '/google6c79871a733902b4.html' => proc { |env| [200, {}, ["google-site-verification: google6c79871a733902b4.html"]] }

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
