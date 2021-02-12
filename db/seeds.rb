# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Product.destroy_all

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

p4 = Product.create!(title: 'Mountain Watercolor Printable Art | Set of 2 Wall Decor | Digital Download', 
price: 11.56, 
description: 'A watercolor painting of a calm mountain view with a dark forest in the foreground. A great way to add a nice scenery to your living space. This set of 2 printables can be placed next to each other or in separate spaces with the theme of landscape paintings in your home.

THIS IS A DIGITAL DOWNLOAD.

A printable link will be made available once your payment is confirmed. NO SHIPPING needed. After checkout, Etsy will redirect you to the downloads page where you can find your purchased digital items. More info on obtaining your printables can be found under delivery. Digital downloads are final sale, NO exchanges or refunds.

Multiple sizes available: 10"x14", 24"x36" (can use these sizes to resize into smaller sizes to fit the perfect space for you)', 
seller_id: u5.id)

p5 = Product.create!(title: 'Beach Print Beach Wall Art Ocean Wall Art Set of 3 Ocean Photography Ocean Print Coastal Wall Art', 
price: 24.99, 
description: 'Beach Print Beach Wall Art Ocean Wall Art Set of 3 Ocean Photography Ocean Print Coastal Wall Art, Waves Wall Decor, Sea Print Beach Poster', 
seller_id: u6.id)

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

p7 = Product.create!(title: 'Custom Heart Necklace • Engrave Heart Pendant', 
price: 69.00, 
description: "I N T E R L O C K E D ∙ H E A R T ∙ C H A R M ∙ N E C K L A C E

• Material: High Quality Solid 925 Sterling Silver

• Dimension: 20mm Heart Charm

• Finish: Sterling Silver ∙ 18K Gold ∙ Rose Gold

• Personalized: This design can be customized with your Roman Numerals, Messages, Coordinates or Names.

• All our work is custom made by hand with Love and Care in our workshop ♡", 
seller_id: u8.id)

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

p9 = Product.create!(title: '3-Tier Macramé Hanging Planter', 
price: 84.15, 
description: "Showcase your favourite plants indoors, year-round with this this 3-tier hanging planter is made from 100% natural cotton.
I hand make all to order, so there is a small chance of slight variation, but it will be substantially the same as the photo. For custom lengths, you're welcome to put it in the personalization box below.
Please note, that you are only purchasing the macrame plant holder, not the pots or plants in the photo. You will also need a properly secured ceiling hook to ensure safe installation. If you're unsure about the best way to attach yours, please contact a local professional.", 
seller_id: u10.id)

p10 = Product.create!(title: '3 Tier Hanging Plant Shelf', 
price: 69.00, 
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

p11 = Product.create!(title: "Hanging Plant - Hanging Planter - Hanging Planter Indoor", 
price: 7.29, 
description: "These plant hangers make excellent housewarming gifts as well as holiday gifts. They'll be sure to make a statement on any wall. Looking for a different size? Send me a message, these hanging planters can be customized to meet your needs.", 
seller_id: u12.id)

p12 = Product.create!(title: "Kids Bookshelf - Bookshelf - Shelf - Book Shelf - Nursery Decor - Nursery Shelf - Kids Room Decor ", 
price: 44.05, 
description: "The shelf shown above was stained in Natural. Each shelf comes with 2 d-ring hangers for easy wall hanging. Please see picture 7 for an example of how the shelf will hang on your walls.

Need a different length? I'd be glad to customize this shelf for you! Please send me a message or email me at mysideofthegarage [!at] gmail.com.", 
seller_id: u13.id)

p13 = Product.create!(title: "Valentine's Day Wreath, Dried Flower Valentines Day Wreath", 
price: 121.49, 
description: "Stunning and sophisticated modern 12 inch hoop wreath (other sizes available) on gold brass frame, decorated with dried materials: dried pink oregano, burgundy strawflowers, white dried statice, Scottish pink heather, dried everlastings, mini daisies. Accented with twine.", 
seller_id: u14.id)

p14 = Product.create!(title: "Pink Peony Modern Hoop Wreath For Front Door Floral Wreath, Modern Farmhouse Lamb's Ear Wreath, Indoor Wreath for Wall Decor", 
price: 52.20, 
description: "Welcome to Wreaths by Sabina!

This versatile beautiful wreath can be a front door, indoor or nursery room hoop wreath, bringing a lovely burst of color to your home!

Light pink and dark pinkish purple peonies are beautifully complemented by accent flowers and an abundance of fuzzy sage green lamb's ear, all set upon a metal gold hoop.

The flowers and greenery are wired to the hoop by hand, with meticulous attention given to creating the right balance of florals, greenery and colors, for a gorgeous wreath.", 
seller_id: u15.id)

p15 = Product.create!(title: "BIRTHDAY CAKE TOPPER. Name & Age Cake Topper,First Birthday Age Cake Topper,Birthday Cake Decoration,", 
price: 11.91, 
description: "This Custom name Birthday glitter cake topper is perfect to decorate your little one's cake. It is made of high quality cardstock. You can personalise with the name of birthday girl or boy and their age.

Now you have the option to choose whether you would like a single sided cake topper (white in the back) or double sided, which has a 3D effect to make it sparkle from all angles.", 
seller_id: u16.id)

p16 = Product.create!(title: "Personalised Name and Age Birthday Cake Topper, DOUBLE SIDED glitter card stock,", 
price: 10.31, 
description: "Decorate your birthday cake with this glittery cake topper. Perfect for any age & milestones
birthday, this will surely add a sparkly touch to your cake.

Made from double sided non shed glitter cardstock which is extra shiny under the lights and glued on a wooden skewer.

This is a delicate item, handle with care.


Please keep the glitter part out of direct contact with the food and out of reach of small children.", 
seller_id: u17.id)

p17 = Product.create!(title: "Girl's Yellow Princess Ballgown Dress , Girl's Yellow and Rose Princess Dress , Girl's Princess Costume , Girl's Everyday Yellow Princess", 
price: 8.23, 
description: "Inspired by a special princess who dared to be more than people thought she should be! This sweet dress will allow your own little princess to dress up in comfort all day long, while allows you to launder with ease.

This beautiful marbled yellow dress features a sweetheart bodice with slight ruching in the center. Ruffled straps tie in the back to finish in a beautiful bow. An embroidered rose on the bodice finishes the top in true princess style.

The ruffle on the bottom of the dress gives a nice twirl, while the hand sewn rosettes add a little extra magic.", 
seller_id: u18.id)

p18 = Product.create!(title: "Double Heart Shirt, Cute Valentines Day Shirt, Womens Valentine, Cute Heart Shirt Unisex, Valentines shirt, Cute Valentines Outfit Tee", 
price: 10.95, 
description: "♥ HOW TO ORDER T-SHIRT ♥


1- Please, Check and Review all Photos.

2- Choose your size from the drop-down menu and add each shirt to your cart one at a time.

3- Select Your Shirt Color from Drop-down 2 which is Shirt Color.

❀Adults round neck shirt are available in all colors listed on drop-down menu.
", 
seller_id: u19.id)

p19 = Product.create!(title: "Daddy Is My Valentine, Valentines Day Shirt, Daddy Valentine Shirt, Cute Valentine day Shirt, Valentine Shirt", 
price: 13.21, 
description: "♥ HOW TO ORDER T-SHIRT ♥


1- Please, Check and Review all Photos.

2- Choose your size from the drop-down menu and add each shirt to your cart one at a time.

3- Select Your Shirt Color from Drop-down 2 which is Shirt Color.

❀Adults round neck shirt are available in all colors listed on drop-down menu.

❀Adults V-NECK Shirts are limited with only", 
seller_id: u20.id)

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