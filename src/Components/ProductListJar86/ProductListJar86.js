import React from "react";

const ProductListJar86 = ({ inventory, addAction }) => {
  return (
    <div className="row border-dark border rounded float-start">
      <div className="container col-sm-12 col-md-12 border-danger rounded">
        <table className="table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((product, key) => (
              <tr key={key}>
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td>{product.quantity < 0 ? 0: product.quantity}</td>
                <td>$ {product.price}</td>
                <td>
                  {product.quantity <= 0 ? (
                    <button className="btn btn-secondary" disabled>OUT OF STOCK</button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={(e) => addAction(product.sku)}
                    >
                      Add
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductListJar86;
