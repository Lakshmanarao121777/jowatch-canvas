import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';
import './Header.css'

// const CatsAndSlider = React.lazy(() => import('../Components/CatsAndSlider.js'));
// const TopPickCategories = React.lazy(() => import('../Components/TopPickCategories.js'));
// const FeaturedProducts = React.lazy(() => import('../Components/FeaturedProducts.js'));

class Header extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="animated fadeIn" id="flipkart-navbar">
        {/* <Container>sfsdf</Container> */}
        <div className="con">
          <Row className="row1">
            <ul className="largenav pull-right">
              <li className="upper-links"><Link className="links" to="http://clashhacks.in/">Link 1</Link></li>
              <li className="upper-links"><Link className="links" to="https://campusbox.org/">Link 2</Link></li>
              <li className="upper-links"><Link className="links" to="http://clashhacks.in/">Link 3</Link></li>
              <li className="upper-links"><Link className="links" to="http://clashhacks.in/">Link 4</Link></li>
              <li className="upper-links"><Link className="links" to="http://clashhacks.in/">Link 5</Link></li>
              <li className="upper-links"><Link className="links" to="http://clashhacks.in/">Link 6</Link></li>
              <li className="upper-links">
                <Link className="links" to="http://clashhacks.in/">
                  <svg className="" width="16px" height="12px" style={{ overflow: "visible" }}>
                    <path d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z" fill="#fff"></path>
                  </svg>
                </Link>
              </li>
              <li className="upper-links dropdown"><Link className="links" to="http://clashhacks.in/">Dropdown</Link>
                <ul className="dropdown-menu">
                  <li className="profile-li"><Link className="profile-links" to="http://yazilife.com/">Link</Link></li>
                  <li className="profile-li"><Link className="profile-links" to="http://hacksociety.tech/">Link</Link></li>
                  <li className="profile-li"><Link className="profile-links" to="http://clashhacks.in/">Link</Link></li>
                  <li className="profile-li"><Link className="profile-links" to="http://clashhacks.in/">Link</Link></li>
                  <li className="profile-li"><Link className="profile-links" to="http://clashhacks.in/">Link</Link></li>
                  <li className="profile-li"><Link className="profile-links" to="http://clashhacks.in/">Link</Link></li>
                  <li className="profile-li"><Link className="profile-links" to="http://clashhacks.in/">Link</Link></li>
                </ul>
              </li>
            </ul>
          </Row>
          <Row className="row2">
            <Col sm="2">
              <h1 style={{ margin: "0px" }}><Link to="/"><span className="largenav" style={{color:"white"}}>Jotter.ai</span></Link></h1>
            </Col>
            <Col sm="8" xs="11" className="flipkart-navbar-search smallsearch">
              <Row>
                <Col sm="11" className="p-0 m-0">
                  <input className="flipkart-navbar-input" type="text" placeholder="Search for Products, Brands and more" name="" style={{width:"100%"}} />
                </Col>
                <Col sm="1"  className="p-0" >
                  <Button block className="flipkart-navbar-button p-2 pb-3">
                    <svg width="16px" height="16px">
                      <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                    </svg>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col sm="2" className="cart largenav">
              <Link className="cart-button" to="/cart">
                <svg className="cart-svg " width="16 " height="16 " viewBox="0 0 16 16 ">
                  <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 " fill="#fff "></path>
                </svg> Cart
                    <span className="item-number ">0</span>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Header;