class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.integer :user_id
      t.string :name
      t.string :pet_type
      t.string :breed
      t.string :size
      t.string :image
    end
  end
end
