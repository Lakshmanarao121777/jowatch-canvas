import React, { Component } from 'react';
import Draggable from 'react-draggable';

import "../Components/sidebar.css";
import "../Components/main.css";
import "../Components/actions.css";
import "../Components/sliders.css";
// const scale = React.lazy(() => import("../Components/img/scale.png"));
// const coin = React.lazy(() => import("../Components/img/scale.png"));
// const card = React.lazy(() => import("../Components/img/scale.png"));
// const usb = React.lazy(() => import("../Components/img/scale.png"));
// const memory = React.lazy(() => import("../Components/img/scale.png"));

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import men from "../Components/img/men_white.png";
import men_black from "../Components/img/men_black.png";
import women from "../Components/img/women_white.png";
import women_black from "../Components/img/women_black.png";
import men_fold from "../Components/img/men_fold.png";
import women_fold from "../Components/img/women_fold.png";
import scale from "../Components/img/scale.png";
import coin from "../Components/img/coin.png";
import card from "../Components/img/card.png";
import usb from "../Components/img/usb.png";
import memory from "../Components/img/memory.png";
import sim from "../Components/img/sim.png";

import watches from '../data/watches.js';
import Details from "../Components/Details.js"


const objs = [
  { item: "scale", obj: scale, title: "Ruler Vertical - 2 in / 5 cm", size: { width: 1, height: 2, dim: 'In' } },
  { item: "coin", obj: coin, title: "1 Rupee", size: { width: 0.98, height: 0.98, dim: 'In' } },
  { item: "card", obj: card, title: "SBI Banking Card", size: { width: 3.37, height: 2.13, dim: 'In' } },
  { item: "usb", obj: usb, title: "Apple USB Plug", size: { width: 1.54, height: 0.62, dim: 'In' } },
  { item: "memory", obj: memory, title: "MicroSD Card", size: { width: 0.43, height: 0.59, dim: 'In' } },
  { item: "sim", obj: sim, title: "SIM Card", size: { width: 0.59, height: 0.98, dim: 'In' } },
]
class Trying extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  constructor(props) {
    super(props);
    this.state = {
      slectedItem: "try",
      watch: '',
      color: 0,
      zoom: 1
    }
  }
  updateColor = value => {
    this.setState({
      color: value,
    });
  };
  updateZoom = value => {
    this.setState({
      zoom: value
    })
  }
  setSelectedItem = async (item) => {
    await this.setState({
      slectedItem: item
    })
  }
  componentDidMount = async () => {
    await this.setState({
      watch: watches.filter(x => { return x.slug === this.props.match.params.watch_slug })[0]
    })
  }

  render() {
    const SideBars = () =>
      objs.map((obj, i) => (
        <li onClick={e => this.setSelectedItem(obj.item)} className={(this.state.slectedItem === obj.item ? 'active' : '') + " ok"} key={i}>
          <div className={"item_box " + (this.state.slectedItem === obj.item ? 'item-box--active' : '')} >
            <div className="item_content">
              <div className="title" title={obj.title}>
                <span className="title_title"> {obj.title}</span>
              </div>
              <div className="thumb">
                <img src={obj.obj} alt={obj.title} style={{ width: "auto", height: "45px" }} />
              </div>
            </div>
            {
              this.state.slectedItem === obj.item &&
              <div className="item-box__content-overlay">
                <div className="content-overlay__title content-overlay__title--top">
                  <span className="item-box__subtitle" title={obj.title}>{obj.title}</span>
                </div>
                <span className="item-box__v-icon">
                </span>
                <div className="content-overlay__title">
                  <span className="item-box__subtitle item-box__dims">
                    <span>{obj.size.width}&nbsp;x&nbsp;</span>
                    <span>{obj.size.height}</span>&nbsp;
                        <span className="unit-postfix tangiblee_color">{obj.size.dim}</span>
                  </span>
                </div>
              </div>
            }
          </div>
        </li>
      ));
    return (
      <div className="animated fadeIn">
        <div className="header_title">
          <h1 title="title">
            {this.state.watch.title}
          </h1>
        </div>
        <div className="sidebar">
          <div className="inner_sidebar">
            <ul>
              <li onClick={e => this.setSelectedItem('try')} className={(this.state.slectedItem === 'try' ? 'active' : '') + " ok"} >
                <div className={"item_box " + (this.state.slectedItem === 'try' ? 'item-box--active' : '')} >
                  <div className="item_content">
                    <div className="thumb">
                      <img src={this.state.watch.gender === 'male' ? men : women} alt="Ruler Vertical - 2 in / 5 cm" style={{ width: "100%", height: "auto", position: "absolute", inset: "0px", margin: "auto" }} />
                    </div>
                  </div>
                  {
                    this.state.slectedItem === 'try' &&
                    <div className="item-box__content-overlay">
                      <div className="content-overlay__title content-overlay__title--top">
                        <span className="item-box__subtitle" title="Model"></span>
                      </div>
                      <span className="item-box__v-icon">
                      </span>
                      <div className="content-overlay__title">
                        <span className="item-box__subtitle item-box__dims">
                          <span> </span>
                          <span> </span>
                          <span className="unit-postfix tangiblee_color"> </span>
                        </span>
                      </div>
                    </div>
                  }
                </div>
              </li>
              <li onClick={e => this.setSelectedItem('fold')} className={(this.state.slectedItem === 'fold' ? 'active' : '') + " ok"} >
                <div className={"item_box " + (this.state.slectedItem === 'fold' ? 'item-box--active' : '')} >
                  <div className="item_content">
                    <div className="thumb">
                      <img src={this.state.watch.gender === 'male' ? men_fold : women_fold} alt="Ruler Vertical - 2 in / 5 cm" style={{ width: "auto", height: "100%", position: "absolute", inset: "0px", top: "0", left: "0" }} />
                    </div>
                  </div>
                  {
                    this.state.slectedItem === 'fold' &&
                    <div className="item-box__content-overlay">
                      <div className="content-overlay__title content-overlay__title--top">
                        <span className="item-box__subtitle" title="Model"></span>
                      </div>
                      <span className="item-box__v-icon">
                      </span>
                      <div className="content-overlay__title">
                        <span className="item-box__subtitle item-box__dims">
                          <span> </span>
                          <span> </span>
                          <span className="unit-postfix tangiblee_color"> </span>
                        </span>
                      </div>
                    </div>
                  }
                </div>
              </li>
              <SideBars />
              {/* <li onClick={e => this.setSelectedItem('comapre')} className={(this.state.slectedItem === 'compare' ? 'active' : '') + " ok"}>
                <div className={"item_box " +(this.state.slectedItem === 'compare' ? 'item-box--active' : '')} >
                <div className="item_content">
                  <div className="title" title="Ruler Vertical - 2 in / 5 cm">
                    Ruler Vertical - 2 in / 5 cm
                  </div>
                </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
        {
          this.state.watch.try !== undefined &&
          <div className="mainpanel">
            {
              objs.filter(x => { return x.item === this.state.slectedItem && x.item })[0] !== undefined &&
                objs.filter(x => { return x.item === this.state.slectedItem && x.item })[0].item === this.state.slectedItem ? (

                  <Details watch={this.state.watch} ref_object={objs.filter(x => { return x.item === this.state.slectedItem && x })[0]} />
                ) : (
                  <>
                    {
                      this.state.slectedItem === 'try' && (
                        this.state.watch.gender === 'male' ?
                          <div style={{ transform: "scale(" + this.state.zoom + ")", transformOrigin: 2 * this.state.zoom + "px " + 2 * this.state.zoom + "px 0px" }}>
                            <div className="" style={{ width: "738.267px", height: "340.833px", backgroundSize: "cover", position: "absolute", left: "0px", backgroundImage: "url(" + men + ")" }} role="img" aria-label="Superimposed model"></div>
                            <div className="" style={{ width: "738.267px", height: "340.833px", backgroundSize: "cover", opacity: this.state.color, position: "absolute", left: "0px", backgroundImage: "url(" + men_black + ")" }} role="img" aria-label="Superimposed model"></div>

                            <div style={{ position: "relative", top: "68px", width: "220px", left: "312px", transformOrigin: "270x 50px", transform: "rotate(10deg)" }}>
                              {/*                               
                              <div className="measure" style={{ width: this.state.watch.watch_details.dail_width * 60 + "px", top: "68px", left: "200px", transform: "rotate(271deg)", transformOrigin: "55px 6px 0px" }}>
                                <div className="measure__left" style={{ width: "33px" }}>
                                  <div className="measure__arrow">
                                  </div>
                                </div>
                                <div className="measure__text" style={{ color: "rgb(0, 0, 0)", top: "0px", left: "0px", width: this.state.watch.watch_details.dail_width * 69 + "px", transform: "rotate(0deg)" }}>
                                  {this.state.watch.watch_details.dail_width} {this.state.watch.watch_details.dail_unit}</div>
                                <div className="measure__right" style={{ width: "33px" }}>
                                  <div className="measure__arrow">
                                  </div>
                                </div>
                              </div>
                               */}
                              <Draggable handle="div" bounds="parent">
                                <div className="box no-cursor watchImg" style={{ backgroundImage: "url(" + this.state.watch.try.url + ")", width: this.state.watch.watch_details.dail_width * 69 + "px", height: this.state.watch.watch_details.dail_height * 88 + "px" }}>
                                </div>
                              </Draggable>
                              {/*                               
                              <div className="measure" style={{ width: this.state.watch.watch_details.dail_width * 69 + "px", top: "160px", left: "0px", transform: "rotate(-1deg)", transformOrigin: "55px 6px 0px" }}>
                                <div className="measure__left" style={{ width: "33px" }}>
                                  <div className="measure__arrow">
                                  </div>
                                </div>
                                <div className="measure__text" style={{ color: "rgb(0, 0, 0)", top: "0px", left: "0px", width: this.state.watch.watch_details.dail_width * 69 + "px", transform: "rotate(0deg)" }}>
                                  {this.state.watch.watch_details.dail_width}  {this.state.watch.watch_details.dail_unit}</div>
                                <div className="measure__right" style={{ width: "33px" }}>
                                  <div className="measure__arrow">
                                  </div>
                                </div>
                              </div>
                             */}
                            </div>
                          </div>
                          :
                          <div style={{ transform: "scale(" + this.state.zoom + ")", transformOrigin: 2 * this.state.zoom + "px " + 20 * this.state.zoom + "px 0px" }}>

                            <div className="" style={{ width: "600.267px", height: "382.833px", backgroundSize: "cover", position: "absolute", left: "0px", backgroundImage: "url(" + women + ")" }} role="img" aria-label="Superimposed model"></div>
                            <div className="" style={{ width: "600.267px", height: "382.833px", backgroundSize: "cover", opacity: this.state.color, position: "absolute", left: "0px", backgroundImage: "url(" + women_black + ")" }} role="img" aria-label="Superimposed model"></div>

                            <div style={{ position: "relative", top: "111px", width: "140px", left: "158px", transformOrigin: "20x 50px", transform: "rotate(0deg)" }}>
                              <Draggable handle="div" bounds="parent">
                                <div className="box no-cursor watchImg" style={{ backgroundImage: "url(" + this.state.watch.try.url + ")", width: this.state.watch.watch_details.dail_width * 64 + "px", height: "136.833px" /*this.state.watch.watch_details.dail_height * 106 + "px"*/ }}>
                                </div>
                              </Draggable>
                            </div>
                          </div>
                      )
                    }
                    {
                      this.state.slectedItem === 'fold' && (
                        this.state.watch.gender === 'male' ?
                          <div style={{ transform: "scale(" + this.state.zoom + ")", transformOrigin: 420 * this.state.zoom + "px " + 350 * this.state.zoom + "px 0px" }}>
                            <div style={{ width: "100%", height: "100vh", backgroundSize: "cover", position: "absolute", left: "0px", backgroundImage: "url(" + men_fold + ")" }}>

                              <div style={{ position: "relative", top: "376px", width: "350px", transform: " rotate(51deg)", left: "740px", transformOrigin: "270x 50px" }}>
                                <Draggable handle="div" bounds="parent">
                                  <div className="box no-cursor watchImg" style={{ backgroundImage: "url(" + this.state.watch.compare.url + ")", width: this.state.watch.watch_details.dail_width * 130 + "px", height: this.state.watch.watch_details.dail_height * 210 + "px" }}>
                                  </div>
                                </Draggable>
                              </div>
                            </div>
                          </div>
                          :
                          <div style={{ transform: "scale(" + this.state.zoom + ")", transformOrigin: 420 * this.state.zoom + "px " + 350 * this.state.zoom + "px 0px" }}>
                            <div style={{ width: "100%", height: "100vh", backgroundSize: "cover", position: "absolute", left: "0px", backgroundImage: "url(" + women_fold + ")" }}>

                              <div style={{ position: "relative", top: "514px", width: "200px", transform: " rotate(-36deg)", left: "815px", transformOrigin: "270x 50px" }}>
                                <Draggable handle="div" bounds="parent">
                                  <div className="box no-cursor watchImg" style={{ backgroundImage: "url(" + this.state.watch.try_fold_details.url + ")", width: this.state.watch.watch_details.dail_width * 80 + "px", height: "198px" }}>
                                  </div>
                                </Draggable>
                              </div>
                            </div>
                          </div>

                      )
                    }
                  </>
                )
            }
            <div className="context-custom-design-panel__container" style={{ display: "flex", backgroundImage: this.state.slectedItem === 'fold' ? "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.016) 12%, rgba(0, 0, 0, 0.024) 16%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.1) 36%, rgba(0, 0, 0, 0.17) 47%, rgba(0, 0, 0, 0.25) 60%, rgba(0, 0, 0, 0.5))" : "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.016) 12%, rgba(0, 0, 0, 0.024) 16%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.1) 36%, rgba(0, 0, 0, 0.17) 47%, rgba(0, 0, 0, 0.25) 60%, rgba(0, 0, 0, 0.5))" }}>
              {
                this.state.slectedItem === 'try' &&
                <div className="context-custom-design-panel context-custom-design-panel__skintone">
                  <div className="context-custom-design-panel__label context-custom-design-panel__label--mobile" style={{ flex: "1 1 47px", cursor: "default" }}> Skin Tone</div>
                  <div className="context-custom-design-panel__slider-container skine-tone-slider" >
                    <Slider className="rc-slider" activeDotStyle={{ width: "50px", borderRadius: "50%", background: "white", borderColor: "white" }} dotStyle={{ width: "20px", borderRadius: "50%", background: "white" }} trackStyle={{ background: "transparent" }} railStyle={{ background: "linear-gradient(90deg,#f7e2d5 0,#dd8e67 54%,#3a2018)" }} onChange={this.updateColor} step={0.005} max={1} min={0} />
                  </div>
                </div>
              }

              <div className="context-custom-design-panel context-custom-design-panel__zoom">
                <div className="context-custom-design-panel__zoom-container">
                  <div className="context-custom-design-panel__label zoom-label">Zoom</div>
                  <div className="context-custom-design-panel__zoom-controls">
                    <div className="context-custom-design-panel__button context-custom-design-panel__button--zoom" onClick={e => this.setState({ zoom: this.state.zoom > 1 ? this.state.zoom - 0.05 : this.state.zoom })} onMouseDown={e => this.setState({ zoom: this.state.zoom > 1 ? this.state.zoom - 0.05 : this.state.zoom })}>–</div>
                    <div className="context-custom-design-panel__slider-container zoom-slider">

                      <Slider className="rc-slider" activeDotStyle={{ width: "50px", borderRadius: "50%", background: "white", borderColor: "white" }} dotStyle={{ width: "20px", borderRadius: "50%", background: "white" }} trackStyle={{ height: "2px", backgroundColor: "rgb(50, 50, 50)", left: "0%", right: "auto", width: "0%" }} railStyle={{ background: "linear-gradient(90deg,#f7e2d5 0,#dd8e67 54%,#3a2018)" }} onChange={this.updateZoom} step={0.05} max={2} min={1} value={this.state.zoom} />
                    </div>
                    <div className="context-custom-design-panel__button context-custom-design-panel__button--zoom" onClick={e => this.setState({ zoom: this.state.zoom < 2 ? this.state.zoom + 0.05 : this.state.zoom })}>+</div>
                  </div>
                </div>
              </div>
              <div className="context-custom-design-panel context-custom-design-panel__description">
                <div className="context-custom-design-panel__container__labels">
                  <h6>Face Diameter: 41 <span className="unit-postfix tangiblee_color">mm</span></h6>
                  <h6>Model Wrist Width: 55&nbsp;<span className="unit-postfix tangiblee_color">mm</span></h6>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Trying;