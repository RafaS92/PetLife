class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :pet_id
      t.string :services
      t.datetime :arrival
      t.string :location
      t.integer :number_days
      t.integer :fee
    end
  end
end
