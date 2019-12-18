import React, { Component } from 'react';
import {tourData} from "../../tourData";
import Tour from "../Tour";
import "./TourList.scss";
export default class TourList extends Component {
  state={
    tours: tourData
  }
  handle = id =>{
    const data = this.state.tours;
    
    const hello = data.filter(item => {
      return id != item.id
    })
    console.log(hello)
    this.setState({
      tours: hello
    })
  }
  render() {
    return (
      <section className="tour-list">
       {this.state.tours.map((item)=>
          (<Tour key={item.id} tour={item} removeTour = {this.handle} />)
       )}
      </section>
    )
  }
}
