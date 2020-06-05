User.destroy_all
Booking.destroy_all
Pet.destroy_all
Review.destroy_all


require "pry"
require "faker"


u1 =   User.create({username: "Himelda",password_digest:"123",address: Faker::Address.full_address,email: Faker::Internet.email})
u2 =   User.create({username: "Venma",password_digest:"123",address: Faker::Address.full_address,email: Faker::Internet.email})
u3 =   User.create({username: Faker::Name.first_name,password_digest:"123",address: Faker::Address.full_address,email: Faker::Internet.email})

p1= Pet.create({user_id: u1.id, name:"churro", pet_type:"Dog",breed:"chihuahua",size:"small",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW9Y3IBK8fed90Tk7-ZNhsDpoUpbj-n2jxy6KI096p-gI7WYNp&usqp=CAU"})
p2= Pet.create({user_id: u2.id, name: "Dali", pet_type:"Dog",breed:"podengo",size:"small",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW9Y3IBK8fed90Tk7-ZNhsDpoUpbj-n2jxy6KI096p-gI7WYNp&usqp=CAU"})
p3= Pet.create({user_id: User.all.sample.id, name: "Grump", pet_type:"Cat",breed:"maloroto",size:"small",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW9Y3IBK8fed90Tk7-ZNhsDpoUpbj-n2jxy6KI096p-gI7WYNp&usqp=CAU"})

b1 = Booking.create({user_id:u1.id, pet_id: p1.id,services:"platinum",client_notes:"awesome",fee:"10"})
b2 = Booking.create({user_id:u2.id,pet_id: p2.id,services:"gold",client_notes:"nahh",fee:"10"})

r1 = Review.create({user_id: u1.id,text:"Me encanto este lugar"})
r2 = Review.create({user_id: u2.id,text:"Odio este lugar"})

