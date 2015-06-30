class UserpostsController < ApplicationController
	def index
		@chain = Chain.find(params[:chain_id])
		@userposts = @chain.userposts
	end

	def create	
		comment = params[:comment]
		user = params[:user]
		address = params[:city]

		chain = Chain.find(params[:chain_id])
		chain.userposts.create comment: comment, user: user, address: address

		render json: 1
	end

	def map
		@user_posts= Userpost.select(:address)
		render "map", layout: false
		
	end
end
