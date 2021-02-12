# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

u1 = User.create!(email: 'myguest@test.com',first_name: 'Guest', password: 'quietgame51')
u2 = User.create!(email: 'Arianna@test.com',first_name: 'Arianna', password: 'oddfrog16')
u3 = User.create!(email: 'Jean@test.com',first_name: 'Jean', password: 'zanyhall89')
u4 = User.create!(email: 'Ashley@test.com',first_name: 'Ashley', password: 'longcap62')
u5 = User.create!(email: 'Susan@test.com',first_name: 'Susan', password: 'cutestick19')
u6 = User.create!(email: 'Katie@test.com',first_name: 'Katie', password: 'bravesilver96')
u7 = User.create!(email: 'Sofia@test.com',first_name: 'Sofia', password: 'goodmice82')
u8 = User.create!(email: 'Amanda@test.com',first_name: 'Amanda', password: 'cutepony15')
u9 = User.create!(email: 'Laura@test.com',first_name: 'Laura', password: 'scaryerror86')
u10 = User.create!(email: 'Barbara@test.com',first_name: 'Barbara', password: 'redbear41')
u11 = User.create!(email: 'Yasmine@test.com',first_name: 'Yasmine', password: 'greatfire68')
u12 = User.create!(email: 'Nikki@test.com',first_name: 'Nikki', password: 'newsalt36')
u13 = User.create!(email: 'Margaret@test.com',first_name: 'Margaret', password: 'wisetime23')
u14 = User.create!(email: 'Nancy@test.com',first_name: 'Nancy', password: 'funnyqueen54')
u15 = User.create!(email: 'Patricia@test.com',first_name: 'Patricia', password: 'smartdirt16')
u16 = User.create!(email: 'Elizabeth@test.com',first_name: 'Elizabeth', password: 'palelight82')
u17 = User.create!(email: 'Joanna@test.com',first_name: 'Joanna', password: 'tinyyear85')
u18 = User.create!(email: 'Roseanne@test.com',first_name: 'Roseanne', password: 'richboo87')
u19 = User.create!(email: 'Cathrine@test.com',first_name: 'Cathrine', password: 'itchymetal85')
u20 = User.create!(email: 'Jessica@test.com',first_name: 'Jessica', password: 'sillywind53')