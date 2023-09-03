import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
    const {
      name,
      price,
      quantity,
      imageUrl,
    } = cartItem;
    const { removeItemFromCart, clearItemFromCart, addItemToCart } =
      useContext(CartContext);

    const handleRemoveItem = () => removeItemFromCart(cartItem);
    const handleAddItem = () => addItemToCart(cartItem);
    const handleClearItem = () => clearItemFromCart(cartItem);
   return (
     <div className="checkout-item-container">
       <div className="image-container">
         <img src={imageUrl} alt={`${name}`} />
       </div>
       <span className="name"> {name} </span>
       <span className="quantity">
         <div className="arrow" onClick={handleRemoveItem}>
           &#10094;
         </div>
         <span className="value">{quantity}</span>
         <div className="arrow" onClick={handleAddItem}>
           &#10095;
         </div>
       </span>
       <span className="price">{price}</span>
       <div className="remove-button" onClick={handleClearItem}>
         &#10005;
       </div>
     </div>
   );
}
export default CheckoutItem;