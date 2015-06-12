class ChainsController < ApplicationController
	def index
		@chains = Chain.all
		@chain = Chain.find 1
		@user_posts = @chain.userposts
	end

	def show
		@chain = Chain.find params[:id]	
		latitude = @chain.userposts.first.latitude.to_f
		longitude = @chain.userposts.first.longitude.to_f
		respond_to do |format|
			format.html
			format.json {render json: [latitude, longitude]}

		end

	end

	def landing

		
	end


end
