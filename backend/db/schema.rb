# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_05_200240) do

  create_table "bookings", force: :cascade do |t|
    t.integer "user_id"
    t.integer "pet_id"
    t.string "services"
    t.string "client_notes"
    t.datetime "arrival"
    t.datetime "departure"
    t.string "location"
    t.integer "fee"
  end

  create_table "pets", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.string "pet_type"
    t.string "breed"
    t.string "size"
    t.string "image"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id"
    t.string "text"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "address"
    t.string "email"
  end

end