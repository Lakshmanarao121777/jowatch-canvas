import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

// const Header = React.lazy(() => import('../Components/Header.js'));
// const Footer = React.lazy(() => import('../Components/Footer.js'));
import watches from '../data/watches.js';
import Header from '../Components/Header';
const Product = React.lazy(() => import('../Components/Product.js'));


class Home extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  constructor(props) {
    super(props);
    this.state = {
      watches: watches
    }
  }
  // componentDidMount(){

  // }
  render() {
    return (
      <div className="animated fadeIn">
        <Header />
        {/* <Footer /> */}
        

        <div className="container">
          <Row>
            {
              this.state.watches
                .map((watch, i) =>
                  <Col md="3" sm="6" key={i} className="my-1">
                    <Product watch={watch} />
                  </Col>
                )
            }
          </Row>
        </div>

      </div>
    );
  }
}

export default Home;