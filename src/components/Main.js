import React from "react";
import Product from './Product';

const Main=(props)=>{
 const{products}=props;
    return(
        <main className="block col-2">
        <h2>Products</h2>
        {/* <div className="container"> */}
        <div className="row  ">
        <div class="col-md-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
            </div>
            </div>
            {/* </div> */}
            </main>
    )
}

export default Main