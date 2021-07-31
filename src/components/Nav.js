import './Nav.css'
import CartContext from '../context/Cart/CartContext'
import { useContext } from 'react'

const Nav = () => {
  const {cartItems,showHideCart}=useContext(CartContext)
    return (
        <nav>
        <div className="nav__left">
        store
        </div>
        <div className="nav__middle">
           <div className="input__wrapper">
            <input type="text" />
            <i className="fas fa-search"></i>
           </div>
        </div>
        <div className="nav__right">
          <div className="cart__icon">
           <i className="fa fa-shopping-cart" aria-hidden="true" onClick={showHideCart}></i>
           {cartItems.length > 0 && <div className="item__count">
            <span>{cartItems.length}</span>
            </div>}
          </div>
        </div>
        </nav>
        )
}

export default Nav
