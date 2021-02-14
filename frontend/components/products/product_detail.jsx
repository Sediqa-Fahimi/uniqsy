// import React from 'react';
// import { withRouter } from 'react-router-dom';

// class ProductDetail extends React.Component {
//     constructor(props) {
//         super(props);

//     }
//     componentDidMount() {
//         const productId = this.props.match.params.productId;
//         this.props.fetchProduct(productId).then(()=> this.props.history.push(`/products/${productId}`));
//     }
//     render() {
//         const { product } = this.props;

//         return (
//             <>
//               <div>
//                   <ul>
//                       <li>{product.title}</li>
//                       <li>{product.price}</li>
//                       <li>{product.description}</li>
//                   </ul>
//               </div>
//             </>
//         )
//     }
// }
// export default withRouter(ProductDetail);