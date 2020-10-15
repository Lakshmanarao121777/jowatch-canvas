import React, { Component } from 'react';

import watches from '../data/watches.js';
import Header from '../Components/Header';
import ShowDetails from '../Components/ShowDetails';

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			watch: watches.filter(x => { return x.slug === this.props.match.params.watch_slug })[0],
			selectedImg: watches.filter(x => { return x.slug === this.props.match.params.watch_slug })[0].images.filter(x => { return x.active && x.url })[0].url
		}
	}
	componentDidMount() {
		// console.log(this.state.watch)
	}
	setSelectedImg(img) {
		this.setState({
			selectedImg: img
		})
	}
	gotoLink=async() =>{
		this.props.history.push( this.props.match.params.watch_slug + '/try')
	}
	render() {
		return (
			<>
				<Header />
				<ShowDetails watch={this.state.watch} />
			</>
		);
	}
}

export default Details;