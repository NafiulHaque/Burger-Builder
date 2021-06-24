import { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
class BurgerBuilder extends Component {

  state = {
    ingredients: [
      { type: 'bread-salad', amount: 0 },
      { type: 'bread-meat', amount: 0 },
      { type: 'bread-salad', amount: 0 }
    ]
  }

  addIngredientHandle = type => {
    const ingredients = [...this.state.ingredients];
    for (let item of ingredients) {
      if (item.type === type) item.amount++;
    }
    this.setState({ ingredients: ingredients });
    console.log(type);
  }

  removeIngredientHandle = type => {
    const ingredients = [...this.state.ingredients];
    for (let item of ingredients) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--
      };
    }
    this.setState({ ingredients: ingredients });
    console.log(type);
  }
  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <Burger ingredients={this.state.ingredients} />
        <Controls
          ingredientAdded={this.addIngredientHandle}
          ingredientRemoved={this.removeIngredientHandle}
        />
      </div >
    )

  }
};

export default BurgerBuilder;
