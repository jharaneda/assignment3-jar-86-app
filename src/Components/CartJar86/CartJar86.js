import React from "react";

const CartJar86 = ({ cart, checkoutAction, deleteAction, totalInfo }) => {
  return (
    <div className="row border-dark border rounded float-end">
      <div className="container col-sm-12 col-md-12 border-danger rounded">
        <table className="table">
          <thead>
            <tr>
              <th>item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, key) => (
              <tr key={key}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>$ {product.price.toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => deleteAction(product.sku)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <button className="btn btn-primary" onClick={checkoutAction}>
                  Checkout
                </button>
              </td>
              <td></td>
              <td></td>
              <td>
                <h3>$ {totalInfo}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartJar86;
