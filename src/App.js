import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import ProductReq from "./components/Forms/ProductReq"
class App extends Component {

  render() {
    return (
      <>
        <Navbar/>
        <ProductReq/>
      </>
    )
  }
}

export default App;