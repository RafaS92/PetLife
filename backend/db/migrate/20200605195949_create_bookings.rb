class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :pet_id
      t.string :services
      t.string :client_notes
      t.datetime :arrival
      t.datetime :departure
      t.string :location
      t.integer :fee
    end
  end
end
