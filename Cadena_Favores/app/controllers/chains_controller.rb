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

	def new
		@chain = Chain.new
	end

	def create
		@chain = Chain.new chain_params
		if @chain.save
			redirect_to @chain
		else
			render 'index'
		end
	end

	private

	def chain_params
		params.require(:chain).permit(:name, :date_chain, :description_chain)
		
	end


end
