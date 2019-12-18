import React from 'react';
import "./Tour.scss";
export default class Tour extends React.Component{
  state={
    showInfo: false,
  }
  handleInfo = ()=>{
    this.setState({
      showInfo: !this.state.showInfo
    })
  }
  render(){
    const {id, img, city, name, info} = this.props.tour;
    const {removeTour} = this.props;
    console.log(this.props)
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="img of the tour"/>
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}> <i className={`fas fa-caret-square-${this.state.showInfo?"right":"down"}`} /></span>
          </h5>
          {this.state.showInfo &&  <p>{info}</p>} 
         
        </div>
      </article>
    )
  }
   
}
