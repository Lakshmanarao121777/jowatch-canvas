import React, { Component } from 'react';
import Draggable from 'react-draggable';
// import { Link } from 'react-router-dom';
// import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

// const CatsAndSlider = React.lazy(() => import('../Components/CatsAndSlider.js'));
// const TopPickCategories = React.lazy(() => import('../Components/TopPickCategories.js'));
// const FeaturedProducts = React.lazy(() => import('../Components/FeaturedProducts.js'));

const propTypes = {
  watch: PropTypes.object,
  ref_object: PropTypes.object,
};
const defaultProps = {
  watch: {},
  ref_object: {},
};


class Details extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const { watch, ref_object, ...attributes } = this.props;
    return (
      <div className="content animated fadeIn" {...attributes} >
        <Draggable handle="div" defaultPosition={{ x: 200, y: 100 }} bounds="parent">
          <div className="box no-cursor watchImg" style={{ backgroundImage: "url(" + watch.compare.url + ")", width: watch.watch_details.dail_width * 144 + "px", height: watch.watch_details.dail_height * 226 + "px" }}>
          </div>
        </Draggable>
        <Draggable handle="div" defaultPosition={{ x: watch.watch_details.dail_width * 300, y: watch.watch_details.dail_height * (-130) }} bounds="parent">
          <div className="box no-cursor refObjectImg" style={{ backgroundImage: "url(" + ref_object.obj + ")", width: ref_object.size.width * 144 + "px", height: ref_object.size.height * 144 + "px" }} >
          </div>
        </Draggable>
      </div>
    );
  }
}
Details.propTypes = propTypes;
Details.defaultProps = defaultProps;
export default Details;