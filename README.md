# README

# uniqsy

<img src="https://github.com/Sediqa-Fahimi/uniqsy/blob/main/app/assets/images/homepage.png" alt="Home page" width="600" />


## Overview

Uniqsy is a self implemented version of the original site Etsy.com, an E-Commerce platform. Independent businesses can sell their handmade products online. Customers can search, view and add these unique arts and crafts to their shopping cart where they can keep track of their desired items. The website also provides customers with the ability to write reviews.


## Demo

[Live demo here](https://uniqsy.herokuapp.com/#/)



## **Technologies used:**
 
**Database**: **PostgreSQL**.

**Backend**: **Ruby on Rails** (web application framework).

**Frontend**: **React**, **Redux**.

**Image storage**: **AWS**



## Features:

1. #### User Authentication
Users can login and logout to an existing account. Users can sign up for a new account. A guest account is provided for browsing the website. 



2. #### Product listing

Homepage lists variety of products in different sections with unique styling. Users can navigate to the product show page to see the specific details about the item. 


3. #### Shopping cart

Users are required to login before they can add items to their shopping cart in order to keep a record of their items in the cart after they logout and when they log back in. Users can view their shopping cart. They can remove items from the shopping cart. They can change the quantity of items in the shopping cart and have the total price calculated. 

<img src="https://github.com/Sediqa-Fahimi/uniqsy/blob/main/app/assets/images/shopping_cart_demo.gif" alt="shopping cart" width="700" />



4. #### Reviews
Reviews of a product are displayed on that product show page, they are publicly available to read. A user must sign in to add a review. Once a user creates a review she/he can edit or delete thier review/s. If the signed in user is the products's seller, she/he will not be able to add review to their own product.



<img src="https://github.com/Sediqa-Fahimi/uniqsy/blob/main/app/assets/images/reviews-feature.png" alt="reviews" width="700"/>



5. #### Search 
Users are able to search any product in the search box provided. Matching products will display and complete automatically as suggestions when they type. Selecting a suggestion directs user to the show page of that product.  
  
  

<img src="https://github.com/Sediqa-Fahimi/uniqsy/blob/main/app/assets/images/search-feature.png" alt="search" />

  
## Challenges
Preventing multiple entries of the same item into the shopping cart and updating the quantity from product show page and from cart show page was a challenge for me. I decided to accomplish this by first checking if the current user already has this item in her/his cart and if it has the item's quantity will be updated by sending an increment flag via the ajax call to the rails update action controller. This function will check again for either increasing or updating(replacing) the quantity. I divided the logic and separated the concern into each page's functionality. The Add to Cart button in the product show page will increase the quantity while the select tag in cart show page will update the final quantity number for immediate checkout or for future checkout. Both increaseing and updating changes are being reflected into the DB. The flag is being sent as an additional data in the params to the update action controller, then the update action controller will only increment the quantity if increase == true (update from product show page) or actually update the quantity if increase == false (update from cart show page).


```javascript
//product_show.jsx

handleClick(e){
    e.preventDefault();
    const { currentUser, 
            openModal, 
            addCartItem, 
            updateCartItem, 
            productId, 
            userId, 
            cartitemId
            } = this.props;

    const cartitem = {
        product_id: productId, 
        user_id: userId, 
        quantity: this.state.value
        };

    if(currentUser){
        const increase = true;
        cartitemId ? updateCartItem(cartitemId, cartitem, increase) : addCartItem(cartitem);     
    } else {
        openModal('login');
    }
}
```

```javascript
//cart_item.jsx

handleChange(e){
    this.setState({quantity: parseInt(e.target.value)}, ()=>{
        this.updateDB();
    });
}

updateDB(){
    const { item } = this.props;
    const cartitem = {
        product_id: item.product_id, 
        user_id: item.user_id, 
        quantity: this.state.quantity
        }
    const increase = false;
    this.props.updateCartItem(item.id,cartitem, increase);
}
```

```ruby
#cartitems_controller.rb

def update
    if logged_in?
        @cartitem = CartItem.find_by(id: params[:id])
        if @cartitem && (params[:increase] == 'true')
            @cartitem.quantity += get_quantity
            @cartitem.save
            @cartitems = CartItem.all.select{ |item| item.user_id == current_user.id }
            render :index
        else  
            if @cartitem.update(cartitem_params)
                @cartitems = CartItem.all.select{ |item| item.user_id == current_user.id }
                render :index
            else
                render json: @cartitem.errors.full_messages, status: 404
            end
        end
    else  
        require_login
    end
end
```



#### To run Locally, run the following commands first:

\> bundle install  
\> bundle exec rails db:setup  
\> npm install  
\> npm run webpack  
\> rails s

Then you can navigate to localhost:3000 in the browser to view the site.

