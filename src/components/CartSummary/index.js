import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalBill = cartList.reduce(
        (acc, currVal) => acc + currVal.price * currVal.quantity,
        0,
      )
      const totalItems = cartList.length
      return (
        <div className="cart-summary-container">
          <div className="cart-bill-container">
            <h1 className="order-text">Order Total:</h1>
            <div className="total-bill">
              Rs <h1>{totalBill}</h1>/-
            </div>
          </div>
          <p className="total-items">{totalItems} Items in cart</p>
          <button className="check-out-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
