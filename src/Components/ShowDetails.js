import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

const propTypes = {
	watch: PropTypes.object,
};
const defaultProps = {
	watch: {},
};

class ShowDetails extends Component {
	loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
	componentDidMount = async () => {
		// console.log(watch)
		this.setState({
			selectedImg: this.props.watch.images.filter(x => { return x.active && x.url })[0].url
		})
	}
	constructor(props) {
		super(props);
		this.state = {
			selectedImg: ''
		}
	}
	setSelectedImg(img) {
		this.setState({
			selectedImg: img
		})
	}
	// gotoLink() {
	// 	this.props.gotoLink();
	// 	// this.props.history.push('/details/' + this.props.watch.watch_slug + '/try')
	// }

	render() {
		const { watch, ...attributes } = this.props;
		return (
			<div className="container animated fadeIn" {...attributes}>

				<div className="container-fliud">
					<Row className="wrapper">
						<Col className="preview p-4" md="6" sm="12">

							<div className="preview-pic tab-content">
								<div className="tab-pane active" id="pic-1"><img src={this.state.selectedImg} alt="description" /></div>
							</div>
							<ul className="preview-thumbnail nav nav-tabs">
								{
									watch.images
										.map((img, i) =>
											<li className={this.state.selectedImg === img.url ? "active" : ""} key={i} onClick={e => this.setSelectedImg(img.url)}><img src={img.url_sm} alt="description" /></li>
										)
								}
							</ul>

						</Col>
						<Col className="details p-4" md="6" sm="12">
							<h3 className="product-title">{watch.title}</h3>
							<div className="rating">
								<div className="stars">
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<span className="review-no">41 reviews</span>
							</div>
							<p className="product-description">{watch.description}</p>
							<h4 className="price">current price: <span>${watch.price}</span></h4>
							<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
							<h5 className="sizes">Dail Type :
								{watch.watch_details.dail_size === watch.watch_details.dail_size_width ? "Rounded/Square" : " Rectangular"}
								<span>{"(" + watch.watch_details.dail_size + "X" + watch.watch_details.dail_size_width + ")"}</span>
							</h5>
							{/* <h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
								<span className="color green"></span>
								<span className="color blue"></span>
							</h5> */}
							<div className="action">
								<Button size="sm" className="add-to-cart mx-2">add to cart</Button>
								<Button size="sm" className="like mx-2"><span className="fa fa-heart"></span></Button>
								<Button size="lg" block color="success" className="my-2 mx-2" onClick={e => this.props.history.push('/' + watch.slug + '/try')}>Try Real Time</Button>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
ShowDetails.propTypes = propTypes;
ShowDetails.defaultProps = defaultProps;
export default withRouter(ShowDetails);