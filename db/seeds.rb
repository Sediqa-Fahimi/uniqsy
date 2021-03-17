require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Product.destroy_all
Review.destroy_all

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

p1 = Product.create!(title: 'Beach Photography Wall Art Print', 
price: 7.29, 
description: "Say hello to our people on the beach print, assured to delight any room! Our wall art is easily customisable to 20+ frame sizes and instantly accessible as a digital download file for you to print at home, take to your local print shop or upload to a printing service such as Officeworks or Staples and have them delivered to your door!

Included in the download is an easy to follow instruction sheet to help you choose the correct file for your frame size.

We also offer a free resizing service if you need a size not included and we are always happy to help you with any part of the process.", 
seller_id: u2.id)

file11 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p1/p1-1.jpg')
file12 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p1/p1-2.jpg')
file13 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p1/p1-3.jpg')
file14 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p1/p1-4.jpg')
file15 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p1/p1-5.jpg')

p1.index_photo.attach(io: file11, filename: 'p1-1.jpg')


p1.photos.attach(io: file12, filename: 'p1-2.jpg')
p1.photos.attach(io: file13, filename: 'p1-3.jpg')
p1.photos.attach(io: file14, filename: 'p1-4.jpg')
p1.photos.attach(io: file15, filename: 'p1-5.jpg')


p2 = Product.create!(title: 'Set of Beach Wall Art Prints, Beach Posters', 
price: 10.00, 
description: 'Set of 100 Beach Wall Art Prints, Beach Posters, Surfing Posters, California Prints, Coastal Print, Beach Prints, Ocean Art, Tropical Vibes.

We offer MODERN and MINIMALIST digital DIY Art Prints that are easy to download and print !

--------------------

Accept all major CREDIT CARDS through PayPal. You do NOT have to have a PayPal account when buying in my shop.

--------------------

Your order will include DIGITAL DOWNLOADS of a set of 100 print in five sizes. I.e. You will receive 500 images in total.

You will receive the best-quality HIGH-RESOLUTION IMAGES.', 
seller_id: u3.id)

file21 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p2/p2-1.jpg')
file22 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p2/p2-2.jpg')
file23 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p2/p2-3.jpg')
file24 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p2/p2-4.jpg')
file25 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p2/p2-5.jpg')

p2.index_photo.attach(io: file21, filename: 'p2-1.jpg')


p2.photos.attach(io: file22, filename: 'p2-2.jpg')
p2.photos.attach(io: file23, filename: 'p2-3.jpg')
p2.photos.attach(io: file24, filename: 'p2-4.jpg')
p2.photos.attach(io: file25, filename: 'p2-5.jpg')


p3 = Product.create!(title: 'Set of 2 Wall Art, Boho Wall Decor', 
price: 15.31, 
description: 'THIS LISTING is for INSTANT DOWNLOAD
Files are available immediately after purchase for you to print yourself at home, in a local print shop or through an online printing service.

ANY SIZE FOR FREE
If you need any additional sizes - feel free to contact me, or just add a note to your order and I will send you files for printing within 12-24 hours

YOUR ORDER WILL CONTAIN
5 hi-res (300dpi) PDF,ZIP files:

* 2:3 ratio file for printing:
Inches: 4x6, 8x12, 12x18, 16x24
Cm: 10x15, 20x30, 30x45, 40x60
* 4:5 ratio file for printing:
Inches: 4x5, 8x10, 11x14, 12x15, 16x20
Cm: 10x12, 20x25, 28x35, 30x38, 40x50', 
seller_id: u4.id)

file31 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p3/p3-1.jpg')
file32 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p3/p3-2.jpg')
file33 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p3/p3-3.jpg')
file34 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p3/p3-4.jpg')
file35 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p3/p3-5.jpg')

p3.index_photo.attach(io: file31, filename: 'p3-1.jpg')

p3.photos.attach(io: file32, filename: 'p3-2.jpg')
p3.photos.attach(io: file33, filename: 'p3-3.jpg')
p3.photos.attach(io: file34, filename: 'p3-4.jpg')
p3.photos.attach(io: file35, filename: 'p3-5.jpg')



p4 = Product.create!(title: 'Mountain Watercolor Printable Art | Set of 2 Wall Decor | Digital Download', 
price: 11.56, 
description: 'A watercolor painting of a calm mountain view with a dark forest in the foreground. A great way to add a nice scenery to your living space. This set of 2 printables can be placed next to each other or in separate spaces with the theme of landscape paintings in your home.

THIS IS A DIGITAL DOWNLOAD.

A printable link will be made available once your payment is confirmed. NO SHIPPING needed. After checkout, Etsy will redirect you to the downloads page where you can find your purchased digital items. More info on obtaining your printables can be found under delivery. Digital downloads are final sale, NO exchanges or refunds.

Multiple sizes available: 10"x14", 24"x36" (can use these sizes to resize into smaller sizes to fit the perfect space for you)', 
seller_id: u5.id)

file41 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p4/p4-1.jpg')
file42 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p4/p4-2.jpg')
file43 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p4/p4-3.jpg')
file44 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p4/p4-4.jpg')
file45 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p4/p4-5.jpg')

p4.index_photo.attach(io: file41, filename: 'p4-1.jpg')

p4.photos.attach(io: file42, filename: 'p4-2.jpg')
p4.photos.attach(io: file43, filename: 'p4-3.jpg')
p4.photos.attach(io: file44, filename: 'p4-4.jpg')
p4.photos.attach(io: file45, filename: 'p4-5.jpg')



p5 = Product.create!(title: 'Beach Print Beach Wall Art Ocean Wall Art Set of 3 Ocean Photography Ocean Print Coastal Wall Art', 
price: 24.99, 
description: 'Beach Print Beach Wall Art Ocean Wall Art Set of 3 Ocean Photography Ocean Print Coastal Wall Art, Waves Wall Decor, Sea Print Beach Poster', 
seller_id: u6.id)

file51 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p5/p5-1.jpg')
file52 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p5/p5-2.jpg')
file53 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p5/p5-3.jpg')
file54 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p5/p5-4.jpg')
file55 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p5/p5-5.jpg')

p5.index_photo.attach(io: file51, filename: 'p5-1.jpg')

p5.photos.attach(io: file52, filename: 'p5-2.jpg')
p5.photos.attach(io: file53, filename: 'p5-3.jpg')
p5.photos.attach(io: file54, filename: 'p5-4.jpg')
p5.photos.attach(io: file55, filename: 'p5-5.jpg')

p6 = Product.create!(title: 'Family Necklace • Personalized Gift • Linked Circle Necklace • Custom Children Name Rings', 
price: 8.22, 
description: "♥ Custom Family Eternity Necklace ♥ The most unique jewelry you can find, perfect gift for you and your loved one ♥

W H Y ∙ Y O U ' L L ∙ L O V E ∙ I T

• It's dainty and can be worn every day

• A special piece you'll treasure

• High quality materials and attention to detail


E T E R N I T Y ∙ N E C K L A C E

• Material: High Quality Solid 925 Sterling Silver

• Dimension: 13mm Outer Diameter

• Finish: Sterling Silver ∙ 18K Gold ∙ Rose Gold", 
seller_id: u7.id)

file61 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p6/p6-1.jpg')
file62 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p6/p6-2.jpg')
file63 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p6/p6-3.jpg')
file64 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p6/p6-4.jpg')
file65 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p6/p6-5.jpg')

p6.index_photo.attach(io: file61, filename: 'p6-1.jpg')

p6.photos.attach(io: file62, filename: 'p6-2.jpg')
p6.photos.attach(io: file63, filename: 'p6-3.jpg')
p6.photos.attach(io: file64, filename: 'p6-4.jpg')
p6.photos.attach(io: file65, filename: 'p6-5.jpg')


p7 = Product.create!(title: 'Custom Heart Necklace • Engrave Heart Pendant', 
price: 69.00, 
description: "I N T E R L O C K E D ∙ H E A R T ∙ C H A R M ∙ N E C K L A C E

• Material: High Quality Solid 925 Sterling Silver

• Dimension: 20mm Heart Charm

• Finish: Sterling Silver ∙ 18K Gold ∙ Rose Gold

• Personalized: This design can be customized with your Roman Numerals, Messages, Coordinates or Names.

• All our work is custom made by hand with Love and Care in our workshop ♡", 
seller_id: u8.id)

file71 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p7/p7-1.jpg')
file72 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p7/p7-2.jpg')
file73 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p7/p7-3.jpg')
file74 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p7/p7-4.jpg')
file75 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p7/p7-5.jpg')

p7.index_photo.attach(io: file71, filename: 'p7-1.jpg')

p7.photos.attach(io: file72, filename: 'p7-2.jpg')
p7.photos.attach(io: file73, filename: 'p7-3.jpg')
p7.photos.attach(io: file74, filename: 'p7-4.jpg')
p7.photos.attach(io: file75, filename: 'p7-5.jpg')

p8 = Product.create!(title: 'Actual Handwriting Vertical Bar Necklace - Personalized Name Bar Jewelry ', 
price: 15.31, 
description: '++ D E T A I L S

• Material: Sterling Silver 925
• Colour: Silver, 18K Gold Filled, or 18K Rose Gold Filled
• Finish: semi-polished
• Engraving is made plain by default (recommended). Engraving can be painted black upon request.
• Size of bar: 6mm x 30mm
• Extra charge applies if you choose chain length over 22".', 
seller_id: u9.id)

file81 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p8/p8-1.jpg')
file82 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p8/p8-2.jpg')
file83 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p8/p8-3.jpg')
file84 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p8/p8-4.jpg')
file85 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p8/p8-5.jpg')

p8.index_photo.attach(io: file81, filename: 'p8-1.jpg')

p8.photos.attach(io: file82, filename: 'p8-2.jpg')
p8.photos.attach(io: file83, filename: 'p8-3.jpg')
p8.photos.attach(io: file84, filename: 'p8-4.jpg')
p8.photos.attach(io: file85, filename: 'p8-5.jpg')


p9 = Product.create!(title: 'Kimisty Set 2 Boho Hanging Planter, Black Geometric Metal Hanging Plant Pot, Ceiling Hanging Mid Century Planter', 
price: 34.15, 
description: "SMART DESIGN, HIGH QUALITY MATERIALS AND CRAFTMANSHIP: Material quality means everything to us, we use black textured powder coated iron and black chain. With its’ textured black finish, they will look like Egyptian treasure when styled and located right.

BEST GIFT WITH CHIC SUSTAINABLE PACKAGING: With its minimalist white packaging, ARCHI hanging planter makes an adorable gift. It makes perfect & unique gift for housewarmings, Christmas, for your mom and friends. With this purchase you will receive, 2 black planter, 2 black hanger, 2 black chain with a hook on it.

WE ARE ONLY HAPPY WHEN YOU ARE: We put our customers at the center of everything we do. Reach out to us if there’s ever anything you need; we are dedicated to your satisfaction. Buy now and if you are not happy no matter what reason, we offer 100% moneyback guarantee.", 
seller_id: u10.id)

file91 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p9/p9-1.jpg')
file92 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p9/p9-2.jpg')
file93 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p9/p9-3.jpg')
file94 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p9/p9-4.jpg')
file95 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p9/p9-5.jpg')

p9.index_photo.attach(io: file91, filename: 'p9-1.jpg')

p9.photos.attach(io: file92, filename: 'p9-2.jpg')
p9.photos.attach(io: file93, filename: 'p9-3.jpg')
p9.photos.attach(io: file94, filename: 'p9-4.jpg')
p9.photos.attach(io: file95, filename: 'p9-5.jpg')


p10 = Product.create!(title: '3 Tier Hanging Plant Shelf', 
price: 69.23, 
description: "Take a look at all our hanging plant solutions in our shop

3 Tier Hanging Plant Shelf

38 inches long
Each shelf is 17 inches long and 6 inches wide
10 inches between each shelf

38x17x6

Hand made with white washed reclaimed wood and jute rope

Living Wall Decor for the Chic Indoor Gardener

Rethink the traditional hanging plants and treat yourself to the Artsy Home Oniship Art Deco 3 tier hanging plant shelf.

plants not included", 
seller_id: u11.id)

file101 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p10/p10-1.jpg')
file102 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p10/p10-2.jpg')
file103 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p10/p10-3.jpg')
file104 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p10/p10-4.jpg')
file105 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p10/p10-5.jpg')

p10.index_photo.attach(io: file101, filename: 'p10-1.jpg')

p10.photos.attach(io: file102, filename: 'p10-2.jpg')
p10.photos.attach(io: file103, filename: 'p10-3.jpg')
p10.photos.attach(io: file104, filename: 'p10-4.jpg')
p10.photos.attach(io: file105, filename: 'p10-5.jpg')


p11 = Product.create!(title: "Hanging Plant - Hanging Planter - Hanging Planter Indoor", 
price: 7.29, 
description: "These plant hangers make excellent housewarming gifts as well as holiday gifts. They'll be sure to make a statement on any wall. Looking for a different size? Send me a message, these hanging planters can be customized to meet your needs.", 
seller_id: u12.id)

file111 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p11/p11-1.jpg')
file112 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p11/p11-2.jpg')
file113 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p11/p11-3.jpg')
file114 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p11/p11-4.jpg')
file115 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p11/p11-5.jpg')

p11.index_photo.attach(io: file111, filename: 'p11-1.jpg')

p11.photos.attach(io: file112, filename: 'p11-2.jpg')
p11.photos.attach(io: file113, filename: 'p11-3.jpg')
p11.photos.attach(io: file114, filename: 'p11-4.jpg')
p11.photos.attach(io: file115, filename: 'p11-5.jpg')


p12 = Product.create!(title: "Kids Bookshelf - Bookshelf - Shelf - Book Shelf - Nursery Decor - Nursery Shelf - Kids Room Decor ", 
price: 44.05, 
description: "The shelf shown above was stained in Natural. Each shelf comes with 2 d-ring hangers for easy wall hanging. Please see picture 7 for an example of how the shelf will hang on your walls.

Need a different length? I'd be glad to customize this shelf for you! Please send me a message or email me at mysideofthegarage [!at] gmail.com.", 
seller_id: u13.id)

file121 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p12/p12-1.jpg')
file122 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p12/p12-2.jpg')
file123 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p12/p12-3.jpg')
file124 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p12/p12-4.jpg')
file125 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p12/p12-5.jpg')

p12.index_photo.attach(io: file121, filename: 'p12-1.jpg')

p12.photos.attach(io: file122, filename: 'p12-2.jpg')
p12.photos.attach(io: file123, filename: 'p12-3.jpg')
p12.photos.attach(io: file124, filename: 'p12-4.jpg')
p12.photos.attach(io: file125, filename: 'p12-5.jpg')


p13 = Product.create!(title: "Valentine's Day Wreath, Dried Flower Valentines Day Wreath", 
price: 12.49, 
description: "Stunning and sophisticated modern 12 inch hoop wreath (other sizes available) on gold brass frame, decorated with dried materials: dried pink oregano, burgundy strawflowers, white dried statice, Scottish pink heather, dried everlastings, mini daisies. Accented with twine.", 
seller_id: u14.id)

file131 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p13/p13-1.jpg')
file132 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p13/p13-2.jpg')
file133 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p13/p13-3.jpg')
file134 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p13/p13-4.jpg')
file135 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p13/p13-5.jpg')

p13.index_photo.attach(io: file131, filename: 'p13-1.jpg')

p13.photos.attach(io: file132, filename: 'p13-2.jpg')
p13.photos.attach(io: file133, filename: 'p13-3.jpg')
p13.photos.attach(io: file134, filename: 'p13-4.jpg')
p13.photos.attach(io: file135, filename: 'p13-5.jpg')


p14 = Product.create!(title: "Pink Peony Modern Hoop Wreath For Front Door Floral Wreath, Modern Farmhouse Lamb's Ear Wreath, Indoor Wreath for Wall Decor", 
price: 52.20, 
description: "Welcome to Wreaths by Sabina!

This versatile beautiful wreath can be a front door, indoor or nursery room hoop wreath, bringing a lovely burst of color to your home!

Light pink and dark pinkish purple peonies are beautifully complemented by accent flowers and an abundance of fuzzy sage green lamb's ear, all set upon a metal gold hoop.

The flowers and greenery are wired to the hoop by hand, with meticulous attention given to creating the right balance of florals, greenery and colors, for a gorgeous wreath.", 
seller_id: u15.id)

file141 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p14/p14-1.jpg')
file142 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p14/p14-2.jpg')
file143 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p14/p14-3.jpg')
file144 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p14/p14-4.jpg')
file145 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p14/p14-5.jpg')

p14.index_photo.attach(io: file141, filename: 'p14-1.jpg')

p14.photos.attach(io: file142, filename: 'p14-2.jpg')
p14.photos.attach(io: file143, filename: 'p14-3.jpg')
p14.photos.attach(io: file144, filename: 'p14-4.jpg')
p14.photos.attach(io: file145, filename: 'p14-5.jpg')

p15 = Product.create!(title: "BIRTHDAY CAKE TOPPER. Name & Age Cake Topper,First Birthday Age Cake Topper,Birthday Cake Decoration,", 
price: 11.91, 
description: "This Custom name Birthday glitter cake topper is perfect to decorate your little one's cake. It is made of high quality cardstock. You can personalise with the name of birthday girl or boy and their age.

Now you have the option to choose whether you would like a single sided cake topper (white in the back) or double sided, which has a 3D effect to make it sparkle from all angles.", 
seller_id: u16.id)

file151 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p15/p15-1.jpg')
file152 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p15/p15-2.jpg')
file153 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p15/p15-3.jpg')
file154 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p15/p15-4.jpg')
file155 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p15/p15-5.jpg')

p15.index_photo.attach(io: file151, filename: 'p15-1.jpg')

p15.photos.attach(io: file152, filename: 'p15-2.jpg')
p15.photos.attach(io: file153, filename: 'p15-3.jpg')
p15.photos.attach(io: file154, filename: 'p15-4.jpg')
p15.photos.attach(io: file155, filename: 'p15-5.jpg')

p16 = Product.create!(title: "Personalised Name and Age Birthday Cake Topper, DOUBLE SIDED glitter card stock,", 
price: 10.31, 
description: "Decorate your birthday cake with this glittery cake topper. Perfect for any age & milestones
birthday, this will surely add a sparkly touch to your cake.

Made from double sided non shed glitter cardstock which is extra shiny under the lights and glued on a wooden skewer.

This is a delicate item, handle with care.


Please keep the glitter part out of direct contact with the food and out of reach of small children.", 
seller_id: u17.id)

file161 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p16/p16-1.jpg')
file162 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p16/p16-2.jpg')
file163 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p16/p16-3.jpg')
file164 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p16/p16-4.jpg')
file165 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p16/p16-5.jpg')

p16.index_photo.attach(io: file161, filename: 'p16-1.jpg')

p16.photos.attach(io: file162, filename: 'p16-2.jpg')
p16.photos.attach(io: file163, filename: 'p16-3.jpg')
p16.photos.attach(io: file164, filename: 'p16-4.jpg')
p16.photos.attach(io: file165, filename: 'p16-5.jpg')


p17 = Product.create!(title: "Girl's Yellow Princess Ballgown Dress , Girl's Yellow and Rose Princess Dress , Girl's Princess Costume , Girl's Everyday Yellow Princess", 
price: 8.23, 
description: "Inspired by a special princess who dared to be more than people thought she should be! This sweet dress will allow your own little princess to dress up in comfort all day long, while allows you to launder with ease.

This beautiful marbled yellow dress features a sweetheart bodice with slight ruching in the center. Ruffled straps tie in the back to finish in a beautiful bow. An embroidered rose on the bodice finishes the top in true princess style.

The ruffle on the bottom of the dress gives a nice twirl, while the hand sewn rosettes add a little extra magic.", 
seller_id: u18.id)

file171 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p17/p17-1.jpg')
file172 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p17/p17-2.jpg')
file173 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p17/p17-3.jpg')
file174 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p17/p17-4.jpg')
file175 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p17/p17-5.jpg')

p17.index_photo.attach(io: file171, filename: 'p17-1.jpg')

p17.photos.attach(io: file172, filename: 'p17-2.jpg')
p17.photos.attach(io: file173, filename: 'p17-3.jpg')
p17.photos.attach(io: file174, filename: 'p17-4.jpg')
p17.photos.attach(io: file175, filename: 'p17-5.jpg')


p18 = Product.create!(title: "Double Heart Shirt, Cute Valentines Day Shirt, Womens Valentine, Cute Heart Shirt Unisex, Valentines shirt, Cute Valentines Outfit Tee", 
price: 10.95, 
description: "♥ HOW TO ORDER T-SHIRT ♥


1- Please, Check and Review all Photos.

2- Choose your size from the drop-down menu and add each shirt to your cart one at a time.

3- Select Your Shirt Color from Drop-down 2 which is Shirt Color.

❀Adults round neck shirt are available in all colors listed on drop-down menu.
", 
seller_id: u19.id)

file181 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p18/p18-1.jpg')
file182 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p18/p18-2.jpg')
file183 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p18/p18-3.jpg')
file184 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p18/p18-4.jpg')
file185 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p18/p18-5.jpg')

p18.index_photo.attach(io: file181, filename: 'p18-1.jpg')

p18.photos.attach(io: file182, filename: 'p18-2.jpg')
p18.photos.attach(io: file183, filename: 'p18-3.jpg')
p18.photos.attach(io: file184, filename: 'p18-4.jpg')
p18.photos.attach(io: file185, filename: 'p18-5.jpg')


p19 = Product.create!(title: "Daddy Is My Valentine, Valentines Day Shirt, Daddy Valentine Shirt, Cute Valentine day Shirt, Valentine Shirt", 
price: 13.21, 
description: "♥ HOW TO ORDER T-SHIRT ♥


1- Please, Check and Review all Photos.

2- Choose your size from the drop-down menu and add each shirt to your cart one at a time.

3- Select Your Shirt Color from Drop-down 2 which is Shirt Color.

❀Adults round neck shirt are available in all colors listed on drop-down menu.

❀Adults V-NECK Shirts are limited with only", 
seller_id: u20.id)

file191 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p19/p19-1.jpg')
file192 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p19/p19-2.jpg')
file193 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p19/p19-3.jpg')
file194 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p19/p19-4.jpg')
file195 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p19/p19-5.jpg')

p19.index_photo.attach(io: file191, filename: 'p19-1.jpg')

p19.photos.attach(io: file192, filename: 'p19-2.jpg')
p19.photos.attach(io: file193, filename: 'p19-3.jpg')
p19.photos.attach(io: file194, filename: 'p19-4.jpg')
p19.photos.attach(io: file195, filename: 'p19-5.jpg')


p20 = Product.create!(title: "Grow Positive Thoughts Shirt | Positive Thought Tee | Mental Health Shirt | Kindness Shirt | Plant Shirt | Positive Shirt", 
price: 10.50, 
description: "Graphic color will be black or white.
(Same as color name on shirt style charts)  


◆◆ PREMIUM UNISEX SHORT SLEEVE JERSEY TEE
Unisex, ultra soft hand, tightly knit
Shoulder to shoulder taping
Cover stitched collar and sleeves
Shoulder to shoulder taping
Retail fit, side seams", 
seller_id: u2.id)

file201 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p20/p20-1.jpg')
file202 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p20/p20-2.jpg')
file203 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p20/p20-3.jpg')
file204 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p20/p20-4.jpg')
file205 = open('https://uniqsy-seeds.s3-us-west-1.amazonaws.com/p20/p20-5.jpg')

p20.index_photo.attach(io: file201, filename: 'p20-1.jpg')

p20.photos.attach(io: file202, filename: 'p20-2.jpg')
p20.photos.attach(io: file203, filename: 'p20-3.jpg')
p20.photos.attach(io: file204, filename: 'p20-4.jpg')
p20.photos.attach(io: file205, filename: 'p20-5.jpg')

r1 = Review.create!(content: 'Love this print for my guest bedroom!',rating: 5, product_id: p1.id, user_id: u3.id)
r2 = Review.create!(content: 'They are fantastic! clear and crisp. Love them!',rating: 4, product_id: p1.id, user_id: u4.id)
r3 = Review.create!(content: 'Love my beach prints! could not be happier!',rating: 5, product_id: p2.id, user_id: u4.id)
r4 = Review.create!(content: 'Interesting design. Promptly processed order.',rating: 5, product_id: p2.id, user_id: u5.id)
r5 = Review.create!(content: 'Perfect print for our dining room! ❤️',rating: 4, product_id: p3.id, user_id: u5.id)
r6 = Review.create!(content: 'These pieces of art turned out amazing! LOVE!',rating: 5, product_id: p3.id, user_id: u6.id)
r7 = Review.create!(content: 'I ordered these prints for above our bed. I couldn’t be happier with how they turned out!',rating: 5, product_id: p4.id, user_id: u6.id)
r8 = Review.create!(content: 'Absolutely LOVE these prints! We put them above our bed in our master bedroom and they turned out beautifully.',rating: 4, product_id: p4.id, user_id: u7.id)
r9 = Review.create!(content: 'Beautiful pictures! They complete our room. Thank you!',rating: 5, product_id: p5.id, user_id: u7.id)
r10 = Review.create!(content: 'We love the canvas beach picture we ordered! The overall quality of the picture and canvas is pretty good and exceeded our expectations.',rating: 3, product_id: p5.id, user_id: u8.id)
r11 = Review.create!(content: 'Super pretty and exactly like the photos! I am super happy I purchased. In love!!',rating: 5, product_id: p6.id, user_id: u8.id)
r12 = Review.create!(content: 'Turned out beautiful! it was perfect!',rating: 3, product_id: p6.id, user_id: u9.id)
r13 = Review.create!(content: 'Absolutely beautiful!!!! Will be purchasing other items for sure! The engraving is delicate but noticeable because it is outlined perfectly',rating: 5, product_id: p7.id, user_id: u9.id)
r14 = Review.create!(content: 'Absolutely beautiful, blown away with how great they are and beautiful the packaging is. Thank you very much!!',rating: 3, product_id: p7.id, user_id: u10.id)
r15 = Review.create!(content: 'The necklace looks good, and I am pretty happy with it.',rating: 3, product_id: p8.id, user_id: u10.id)
r16 = Review.create!(content: 'My mom loved her gift!',rating: 3, product_id: p8.id, user_id: u11.id)
r17 = Review.create!(content: 'Lightening speed shipping! Got my planters in 3 days and they are beautiful! Thank you!',rating: 5, product_id: p9.id, user_id: u11.id)
r18 = Review.create!(content: 'I love the black iron look and feel, great quality. These look great above my fireplace!',rating: 4, product_id: p9.id, user_id: u12.id)
r19 = Review.create!(content: 'Oh so pretty. It is as lovely as described.... didn’t take over my tiny little space as it is a petite item. Nicely made!',rating: 5, product_id: p10.id, user_id: u12.id)
r20 = Review.create!(content: 'The candle and match kit is the cutest thing ever. I am definetly going to order more.',rating: 4, product_id: p11.id, user_id: u13.id)
r21 = Review.create!(content: 'These are absolutely beautiful! Exactly what I expected. They even still smell like fresh wood.',rating: 4, product_id: p12.id, user_id: u14.id)
r22 = Review.create!(content: 'Absoutlely gorgeous!! I am so in LOVE with this wreath the craftsmanship is just simply amazing!!',rating: 3, product_id: p13.id, user_id: u15.id)
r23 = Review.create!(content: 'I love it!! 💕Looks better than I expected, and is a perfect piece for my front door!',rating: 4, product_id: p14.id, user_id: u16.id)
r24 = Review.create!(content: 'So beautiful. I am so pleased',rating: 3, product_id: p15.id, user_id: u17.id)
r25 = Review.create!(content: 'Was the perfect finish to our yummy cake!',rating: 4, product_id: p16.id, user_id: u18.id)
r26 = Review.create!(content: 'SO SATISFIED! This dress stole the show. Excellent experience.',rating: 5, product_id: p17.id, user_id: u19.id)
r27 = Review.create!(content: 'The shirt is adorable and I love the way you can customize it.',rating: 4, product_id: p18.id, user_id: u20.id)
r28 = Review.create!(content: 'Just received my package and I am totally in love with them! Can’t wait to give the shirts to my besties I just know they will love it!',rating: 5, product_id: p19.id, user_id: u17.id)
r29 = Review.create!(content: 'The color is beautiful and the fabric is very soft.I have received lots of compliments! Love this shirt!',rating: 5, product_id: p20.id, user_id: u18.id)

