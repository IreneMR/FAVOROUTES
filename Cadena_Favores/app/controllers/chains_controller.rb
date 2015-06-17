class ChainsController < ApplicationController
	def index
		@chains = Chain.all
		@chain = Chain.find 1
		@user_posts = @chain.userposts
	end

	def show
		@chain = Chain.find params[:id]	

	end

	def landing

		
	end


end
