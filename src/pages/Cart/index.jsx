import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  formatCurrency,
  getItemFromLocalStorage,
  updateItemToLocalStorage,
} from "../../utils/shoe";

import "./styles.css";

export const Cart = () => {
  const [items, setItems] = useState([]);

  const handleIncreaseQuantity = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
    updateItemToLocalStorage(updatedItems);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
    updateItemToLocalStorage(updatedItems);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    updateItemToLocalStorage(updatedItems);
  };

  const totalPrice = items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  useEffect(() => {
    setItems(getItemFromLocalStorage());
  }, []);

  return (
    <div className="cart-container">
      <h2>Giỏ hàng</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Thông tin</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Xoá</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.poster} />
              </td>
              <td>
                <div className="information">
                  <p>{item.name}</p>
                  <p>({item.size})</p>
                </div>
              </td>
              <td>{formatCurrency(item.price)}</td>
              <td>
                <div className="quantity">
                  <div
                    className="cart-action-button"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </div>
                  {item.quantity}
                  <div
                    className="cart-action-button"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </div>
                </div>
              </td>
              <td>{formatCurrency(item.quantity * item.price)}</td>
              <td>
                <button
                  className="cart-action-button"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price-box">
        Tổng tiền:{" "}
        <span className="total-price">{formatCurrency(totalPrice)}</span>
      </div>
      <div className="payment">
        <Link to="/" className="button-buy">
          Tiếp tục mua hàng
        </Link>
        <Link to="/Pay" className="button-payment">
          Thanh toán
        </Link>
      </div>
    </div>
  );
};
