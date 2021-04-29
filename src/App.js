import React from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Showcase from "./components/Showcase";
import Newsletter from "./components/Newsletter";

import ShoppingCartContext from "./contexts/ShoppingCartContext";

class App extends React.Component {
  state = {
    cart: [],
    addProducts: (newProduct) => {
      let updatedCart = [...this.state.cart, newProduct];

      console.log([...this.state.cart, newProduct]);
      this.setState({
        cart: updatedCart,
      });

      window.localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    },
  };

  componentDidMount() {
    let cartItems = JSON.parse(window.localStorage.getItem("cartItems"));

    if (cartItems != null) {
      this.setState({
        cart: [...cartItems],
      });
    }
  }

  render() {
    return (
      <ShoppingCartContext.Provider value={this.state}>
        <div>
          <Header />
          <Carousel />
          <Showcase />
          <Newsletter />
        </div>
      </ShoppingCartContext.Provider>
    );
  }
}

export default App;
