import React from "react";

import classes from './ProductDetails.module.css';
import ProductData from "./ProductData";

const ProductDetails = (props) => {
    return(
        <div className={classes.ProductData}>
        <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
        <p className={classes.Product}>{ProductData.description}</p>

        <h3 className={classes.SectionHeading}>Select Color</h3>
        <div>
          <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5gXF0iZ3aYRCRVarHq4SAw5PnoDsxy7BCEnKjGiuwA&s" alt="red colored watch"/>
          <img className={classes.ProductImage} src="https://imgur.com/iOeUBV7.png" alt="Black colored watch"/>
          <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue colored watch"/>
          <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple colored watch"/>
        </div>

        <h3 className={classes.SectionHeading}>Features</h3>
        <div>
          <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
          <button className={classes.FeatureItem}>Heart Rate</button>
        </div>

        <button className={classes.PrimaryButton}>Buy Now</button>

      </div>
    );
}

export default ProductDetails;