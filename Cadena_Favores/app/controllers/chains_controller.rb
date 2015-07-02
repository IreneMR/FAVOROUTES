class ChainsController < ApplicationController
	def index
		@chains = Chain.all
		@chain = Chain.find 1
		@user_posts = @chain.userposts

		@userposts = []

		@chains.each do |chain|
			@userposts.push chain.userposts
		end

		respond_to do |format|
			format.html
			format.json { render json: @userposts }
		end
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
		
		@chain_params = params[:newChain]
		@chain = Chain.new
		@chain.name = @chain_params["name"]
		@chain.date_chain = @chain_params["date"]
		@chain.description_chain = @chain_params["description"]

		if @chain.save
			respond_to do |format|
				format.html
				format.json { render json: 1 }
			end
		else
			render 'index'
		end
	end

	def destroy
		@chain = Chain.find(params[:chain_id])
		chain.destroy
		redirect_to '/chains'	
	end



	private

	def chain_params
		params.require(:chain).permit(:name, :date_chain, :description_chain)
	end


end
