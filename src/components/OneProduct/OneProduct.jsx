import { Component } from "react";
import { pics } from "../svg";
import "./oneProduct.scss";

class OneProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingProduct: this.props.element.amount,
      increment: 0,
      isClick: false,
    };
  }

  selectProduct = () => {
    const { increment, isClick, remainingProduct } = this.state;
    const { cost } = this.props.element;
    if (isClick) {
      this.setState({ isClick: false });
      const clearCost = increment * cost;
      this.props.changeTotalCost(clearCost);
      this.setState({ remainingProduct: remainingProduct + increment });
      this.setState({ increment: 0 });
    } else {
      this.setState({ isClick: true });
    }
  };

  handleChangeNumber = (e, way) => {
    const { increment, remainingProduct, isClick } = this.state;
    const { cost } = this.props.element;
    e.stopPropagation();
    if (way === "inc" && increment >= 0 && remainingProduct > 0 && isClick) {
      this.setState({ increment: increment + 1 });
      this.setState({ remainingProduct: remainingProduct - 1 });
      this.props.changePrice(way, cost);
    }
    if (way === "dec" && increment >= 1 && remainingProduct >= 0 && isClick) {
      this.setState({ increment: increment - 1 });
      this.setState({ remainingProduct: remainingProduct + 1 });
      this.props.changePrice(way, cost);
    }
  };

  render() {
    const { name, cost, imgUrl } = this.props.element;
    const { minus_circle, plus_circle } = pics;
    const { isClick, remainingProduct } = this.state;

    return (
      <div
        onClick={() => this.selectProduct()}
        className={isClick ? "product__block clicked" : "product__block"}
      >
        <div className="product__title">
          <img src={imgUrl} alt="" className="images" />
          <h1>{name}</h1>
        </div>
        <div className="product__cost">
          <p>цена{cost}р</p>
        </div>
        <div className="product__amount">
          <p>всего: {remainingProduct}</p>
        </div>

        <div className="product__icons">
          <i onClick={(e) => this.handleChangeNumber(e, "dec")}>
            {minus_circle}
          </i>
          <p>{this.state.increment}</p>
          <i onClick={(e) => this.handleChangeNumber(e, "inc")}>
            {plus_circle}
          </i>
        </div>
      </div>
    );
  }
}
export default OneProduct;
