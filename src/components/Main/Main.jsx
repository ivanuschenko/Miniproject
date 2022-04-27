import { Component } from "react";
import Header from "../Header/Header";
import { list } from "../../constants";
import "./main.scss";
import OneProduct from "../OneProduct/OneProduct";
import _ from "underscore";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: list,
      copyList: list,
      totalCost: 0,
    };
  }

  changePrice = (way, val) => {
    const { totalCost } = this.state;
    way === "inc"
      ? this.setState({ totalCost: totalCost + val })
      : this.setState({ totalCost: totalCost - val });
  };
  changeTotalCost = (val) => {
    const { totalCost } = this.state;
    this.setState({ totalCost: totalCost - val });
  };

  listFilter = (name) => {
    const { price, copyList } = this.state;
    let changeList = price;
    if (name === "") {
      this.setState({ price: copyList });
    } else {
      changeList = _.filter(
        changeList,
        (element) => !element.name.toLowerCase().indexOf(name.toLowerCase())
      );
      this.setState({ price: changeList });
    }
  };
  render() {
    const { totalCost, isClick } = this.state;
    return (
      <div>
        <Header totalCost={totalCost} listFilter={this.listFilter} />
        <div className="list">
          {this.state.price.map((element, index) => (
            <div key={index} className="product">
              <OneProduct
                element={element}
                index={index}
                totalCost={this.setState}
                changePrice={this.changePrice}
                isClick={isClick}
                changeStyle={this.changeStyle}
                changeTotalCost={this.changeTotalCost}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Main;
