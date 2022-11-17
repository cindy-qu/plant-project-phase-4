# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
PlantPost.destroy_all
Review.destroy_all

states = 
['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

plantsArr = ['https://images.unsplash.com/photo-1544474921-9df05bc76d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80','https://images.unsplash.com/photo-1599009944997-3544a939813c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'https://images.unsplash.com/photo-1590417975638-1f8d37cf22df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'https://images.unsplash.com/photo-1536846826492-c51b3984bc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80','https://images.unsplash.com/photo-1623173508476-9883063f904b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80','https://images.unsplash.com/photo-1604762512601-335085b1e11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80','https://images.unsplash.com/photo-1517024785852-498ab0c02de5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1722&q=80']

booleanValue = ['true', 'false']


brooke = User.create(username: 'Brooke123', password: "123456789")
cindy = User.create(username: 'Cindy42', password: "5432123456")
mustafa = User.create(username: 'Mustafa7', password: "6789011111")


puts "Seeding Plant Posts..."
99.times do
    PlantPost.create(plant_name: Faker::Tea.variety , image: plantsArr.sample, state: states.sample, indoor: booleanValue.sample, pet_safe: booleanValue.sample, user_id: User.all.sample.id)
end


puts "Seeding Reviews..."
30.times do
    Review.create(comment: Faker::Quote.famous_last_words[5..200] , user_id: User.all.sample.id, plant_post_id: PlantPost.all.sample.id)
end


puts "✅ Done seeding!"