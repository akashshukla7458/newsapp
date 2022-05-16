import React, { Component } from 'react'
import PropTypes from "prop-types";
import loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
           <img className="my-3" width="5%" src={loading} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
