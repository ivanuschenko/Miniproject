import { Component } from "react";
import "./header.scss";
import { logoUrl } from "../../constants";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      findProduct: "",
    };
  }
  render() {
    const { totalCost } = this.props;
    const { findProduct } = this.state;
    return (
      <form className="header-form">
        <img className="header-form__logo" src={logoUrl} alt="header_logo" />
        <input
          className="header-form__input"
          type="text"
          placeholder="Название товара"
          onChange={(e) => this.setState({ findProduct: e.target.value })}
        />
        <input
          className="header-form__button"
          type="button"
          value="Поиск"
          onClick={() => this.props.listFilter(findProduct)}
        />
        <div className="header-form__text-amount">
          <p>Общая стоимость выбранных товаров: {totalCost}р</p>
        </div>
      </form>
    );
  }
}
export default Header;
