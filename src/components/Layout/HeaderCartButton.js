import { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cartContext'
const HeaderCartButton = (props) => {
  const [btnIsHeighted, setBtnIsHeighted] = useState(false)
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((acc, curr) => {
    return acc + curr.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHeighted ? classes.bump : ''}`

  const { items } = cartCtx
  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHeighted(true)
    const timer = setTimeout(() => {
      console.log('inner')
      setBtnIsHeighted(false)
    }, 300)

    return () => {
      console.log('return')
      clearTimeout(timer)
    }
  }, [items])
  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  )
}

export default HeaderCartButton
