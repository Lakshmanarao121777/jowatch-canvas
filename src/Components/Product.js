import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Col, Row } from 'reactstrap';

// const CatsAndSlider = React.lazy(() => import('../Components/CatsAndSlider.js'));
// const TopPickCategories = React.lazy(() => import('../Components/TopPickCategories.js'));
// const FeaturedProducts = React.lazy(() => import('../Components/FeaturedProducts.js'));

class Product extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  // constructor(props) {
  //   super(props);
  // }
  // componentDidMount(){
  //   console.log("component mounted" );
  // }
  getThumbnails(img) {
    let o_img = img;
    img = img.replace(".jpg", "-sm.jpg");
    img = img.replace(".png", "-sm.jpg");
    img = img ? img : o_img;
    return img;
  }
  render() {
    const { children, watch, ...attributes } = this.props;
    return (
      <div className="product-grid6 animated fadeIn" {...attributes}>
        <div className="product-image6">
          <Link to={watch.slug}>
            <img className="pic-1" src={watch.images.filter(x =>{ return x.active && x.url } )[0].url } alt="description" />
          </Link>
        </div>
        <div className="product-content">
          <h3 className="title"><Link to={watch.slug}>{watch.title.substring(0, 20) + '...'}</Link></h3>
          <div className="price">${watch.price}
            <span>${watch.price+ (watch.price*0.1)}</span>
          </div>
        </div>
        <ul className="social">
          <li><Link to={watch.slug} data-tip="Quick View"><i className="fa fa-search"></i></Link></li>
          <li><Link to={watch.slug} data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></Link></li>
          <li><Link to={watch.slug} data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></Link></li>
        </ul>

      </div>
    );
  }
}

export default Product;