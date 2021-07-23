import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {IoStarSharp} from 'react-icons/io5';


class ProductIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const { product } = this.props;
        const colors = {
          black: '#444343',
          grey: '#CFCFCF'
        }
        return (
          <li key={product.id} >
              <Link to={`/products/${product.id}`} >
                <img src={product.photoUrl} alt=""/>
                <div className="listing-reviews">
                  <span>
                    {Array(5)
                    .fill(0)
                    .map((_,i)=>{
                      return(
                        <span>
                          <IoStarSharp 
                            key={i}
                            size={16}
                            color={product.averageRating >= i+1 ? colors.black : colors.grey}
                          />
                        </span>
                      );
                    })
                    }
                  </span>
                  <span>({product.totalReviews})</span>
                </div>
                ${product.price}
              </Link>
          </li>
        )
    }
}



export default withRouter(ProductIndexItem);