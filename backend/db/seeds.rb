User.destroy_all
Booking.destroy_all
Pet.destroy_all
Review.destroy_all



require "pry"
require "faker"


u1= User.create({username: "Rafael",password:"123456789",address: Faker::Address.full_address,email: Faker::Internet.email})
u4 =   User.create({username: "Himelda",password:"123",address: Faker::Address.full_address,email: Faker::Internet.email})
u2 =   User.create({username: "Venma",password:"123",address: Faker::Address.full_address,email: Faker::Internet.email})
u3 =   User.create({username: Faker::Name.first_name,password:"123",address: Faker::Address.full_address,email: Faker::Internet.email})

# p1= Pet.create({user_id: u1.id, name:"Elsa", pet_type:"Dog",breed:"chihuahua",size:"small"})
# p1= Pet.create({user_id: u1.id, name:"Motita", pet_type:"Dog",breed:"podengo",size:"medium"})
p1= Pet.create({user_id: u2.id, name:"churro", pet_type:"Dog",breed:"chihuahua",size:"small"})
p2= Pet.create({user_id: u2.id, name: "Dali", pet_type:"Dog",breed:"podengo",size:"small"})
p3= Pet.create({user_id: u2.id, name: "Grump", pet_type:"Cat",breed:"maloroto",size:"small"})


b1 = Booking.create({user_id:u1.id, pet_id: p1.id,services:"platinum",fee:"10", location:"Downtown"})
b2 = Booking.create({user_id:u2.id,pet_id: p2.id,services:"gold",fee:"10",location:"Sugar Land"})

r1 = Review.create({user_id: u1.id,username:Faker::Name.first_name  ,text:"The owner is very dedicated to taking excellent care of your dog. Great doggie daycare and grooming services.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqsRkKq2KF5lPA6kRwazt3JXrgWwmLRNnfkola9M15K5-D6LAX&usqp=CAU"})
r2 = Review.create({user_id: u3.id,username:Faker::Name.first_name  ,text:"My dog loves this place! That is all that needs to be said.",image:"https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*"})
r2 = Review.create({user_id: u3.id,username:Faker::Name.first_name  ,text:"Great place for pet care/boarding (museum district). Friendly and caring staff.",image:"https://cdn.mos.cms.futurecdn.net/JzqhuEDTRfCZKMKHUxPySB.jpg"})
r2 = Review.create({user_id: u2.id,username:Faker::Name.first_name  ,text:"Exceptional pet care! I’ve brought my dog here for several years - grooming, day care and boarding. The day care has helped immensely with anxiety, and she’s become playful and happy to interact with other dogs.",image:"https://topdogtips.com/wp-content/uploads/2014/12/Top-10-Cute-Dog-Breeds-Who-Wins-1.jpg"})
r2 = Review.create({user_id: u1.id,username:Faker::Name.first_name  ,text:"Our dog went here for 2 years (until we moved away). His tail would start wagging as soon as he saw the building and the people. One of the best (dog) daycares in Houston!",image:"https://cdn.images.express.co.uk/img/dynamic/128/590x/Emerald-is-twisted-and-deformed-thanks-to-over-breeding-of-fad-handbag-dogs-959601.jpg"})
r2 = Review.create({user_id: u1.id,username:Faker::Name.first_name  ,text:"Very accommodating, very friendly staff",image:"https://images.theconversation.com/files/73544/original/image-20150302-15950-6porsa.jpg?ixlib=rb-1.1.0&rect=0%2C16%2C2738%2C1647&q=45&auto=format&w=926&fit=clip"})
r2 = Review.create({user_id: u3.id,username:Faker::Name.first_name  ,text:"Board my 11 year old chi-mix here several times a year & they always take great care of him.",image:"https://www.mydomaine.com/thmb/P20JXc9SYLxlRUSn9NL0Fig3nZI=/700x499/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__271341__smartest-dog-breeds-271341-1540932079817-image.700x0c-c7803ea9de244bc0a8e9bdf7b4d9cd61.jpg"})
r2 = Review.create({user_id: u3.id,username:Faker::Name.first_name  ,text:"Really nice pet hotel with reasonable prices and kind staff",image:"https://i2-prod.coventrytelegraph.net/incoming/article17702046.ece/ALTERNATES/s1200b/1_JS205555318.jpg"})
r2 = Review.create({user_id: u2.id,username:Faker::Name.first_name  ,text:"I've FINALLY found the perfect place for my mini-poodle mutt Augie. They actually know how to treat dogs! Thank you so much, I bet Augie can't wait to go back!",image:"https://photos.clevescene.com/wp-content/uploads/2020/03/APL-Annie.jpg"})
r2 = Review.create({user_id: u2.id,username:Faker::Name.first_name  ,text:"This place also offers grooming if you need it for an extra charge. I have called around different places and they have the best pricing in my area. The place is very clean and well organized. The staff is wonderful as well.",image:"https://www.rd.com/wp-content/uploads/2019/01/shutterstock_115329475.jpg"})
r2 = Review.create({user_id: u2.id,username:Faker::Name.first_name  ,text:"They are just fantastic. It is a huge air conditioned place where they sleep. My dogs never want to come home with me. They are priced reasonably. She will take pictures of your dogs and send them to you. She rotates the dogs throughout the day so they get exercise .",image:"https://usercontent2.hubstatic.com/14567513_f520.jpg"})
r2 = Review.create({user_id: u1.id,username:Faker::Name.first_name  ,text:"They took great care of my dog Jack! Everyone was very friendly!",image:"https://cdn.newsapi.com.au/image/v1/9e6905b6b44f219256d80c66e16df365"})
r2 = Review.create({user_id: u1.id,username:Faker::Name.first_name  ,text:"Pet Life  do an excellent job caring for my dogs. They respond immediately when I make a request for service and is extremely reliable. I completely trust them and I know my dogs are in good hands when I am gone.",image:"https://merchdope.com/wp-content/uploads/2018/10/Beagle-dog-1.jpg"})
r2 = Review.create({user_id: u1.id,username:Faker::Name.first_name  ,text:"Best Pet hotel ever. The people are awesome and kind and the facilities are clean and comfortable for my doggie.",image:"https://www.rover.com/blog/wp-content/uploads/2015/09/teddy-bear-dog-960x540.jpg"})
r2 = Review.create({user_id: u1.id,username:"Potter" ,text:"Friendly staff and always take excellent care of my dog during boarding or doggie daycare. Clean and organized Pet Hotel with excellent dog grooming service as well.",image:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2019/10/7/rx_amazon-dog-costumewizard-dog-costume.jpeg.rend.hgtvcom.966.966.suffix/1570470965458.jpeg"})
r2 = Review.create({user_id: u3.id,username:Faker::Name.first_name  ,text:"Pet Life is a very good company and I highly recommend them.They trained our dog well. We can now leave the front door open, walk away and he will not leave.",image:"https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Corgi-Pembroke_01.jpeg"})
r2 = Review.create({user_id: u3.id,username:Faker::Name.first_name  ,text:"Awesome staff, AMAZING facility (don't let the outside fool you).",image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg?crop=0.747xw:1.00xh;0.0459xw,0&resize=480:*"})
r2 = Review.create({user_id: u1.id,username:Faker::Name.first_name  ,text:"Our dog loves to go there for boarding. He has separation anxiety, and he doesn't even look back to say good bye when we drop him off. If he didn't like it there, he wouldn't be as happy as he is there.",image:"https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2019/01/afghan-hound.jpg?resize=1024%2C681&ssl=1"})
r2 = Review.create({user_id: u2.id,username:Faker::Name.first_name  ,text:"Well priced. Clean facility and nice staff.",image:"https://www.armadatekstil.net/wp-content/uploads/2014/03/cute-medium-sized-dog-breeds.png"})
r2 = Review.create({user_id: u2.id,username:Faker::Name.first_name  ,text:"I have never been here probably never will but Google refuses to remove it off of my timeline so I guess I'm leaving a four-star review",image:"https://www.mydomaine.com/thmb/C9a-E9UapXJZxrzIZvKiMN_ZStc=/980x700/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__267473__medium-dog-breeds-267473-1536705485812-main.700x0c-4ea1d5dbe10c4e2b90c6d3576a58b283.jpg"})
r2 = Review.create({user_id: u2.id,username:"Goku" ,text:"Will definitely be bringing my dog again here! He was taken care of and fed and when he was picked up I saw how well he was cared for!",image:"https://cdn.shopify.com/s/files/1/1465/0432/products/il_570xN.598707123_fvs5_grande.jpg?v=1472714653"})
r2 = Review.create({user_id: u2.id,username:"Taquirooo",text:"I travel for work, sometimes with a ton of warning and sometimes with no warning. No issues with me last minute boarding my dog. Staff is friendly. No issues when I call.",image:"https://www.maskerix.com/wp-content/uploads/2019/04/diy-taco-dog-costume.jpg"})