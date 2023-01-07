import { useShoppingCart } from "../context/ShoppingCartContext"
import { CheckoutTable } from "../components/CheckoutTable"
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import '../assets/scss/payment.scss'
import { Link } from "react-router-dom";

export const Checkout = () => {
  const { cartItems,  } = useShoppingCart()

    return (
      <div className="container">
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Buttons</th>
          </tr>
        </thead>
          {cartItems.map(item => (
            <CheckoutTable key={item.id} {...item} />
          ))}
        </Table>
        <div className="payment">
        <Link
          className="btn btn-primary"
          role="button"
          to="/payment"> Checkout
        </Link>
        </div>
      </div>
    )
}