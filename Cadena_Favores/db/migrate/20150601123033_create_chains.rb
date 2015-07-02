class CreateChains < ActiveRecord::Migration
  def change
    create_table :chains do |t|
    	t.string :name
    	t.string :date_chain
    	t.text :description_chain

      t.timestamps null: false
    end
  end
end
