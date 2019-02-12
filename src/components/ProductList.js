import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import {ProductConsumer} from '../context';



class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(this.state.products);

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="bike" title="parts" />
            <div className="row">
            <ProductConsumer>
                {hello=>{
return <h1>{hello}</h1>;
                }}
            </ProductConsumer>
            </div>
          </div>
        </div>
        {/* <Product /> */}
      </React.Fragment>
    );
  }
}

export default ProductList;
