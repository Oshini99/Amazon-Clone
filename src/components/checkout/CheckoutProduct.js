// import React from "react";
// import "./CheckoutProduct.css";
// import { useStateValue } from "./StateProvider";

// function CheckoutProduct({ id, image, price, rating, hideButton }) {
//   const [{ basket }, dispatch] = useStateValue();

//   const removeFromBasket = () => {
//     // remove the item from the basket

//     dispatch({ type: "REMOVE_FROM_BASKET", id: id });
//   };

//   return (
//     <div className="checkoutProduct">
//       <img className="checkoutProduct__image" src={image} />

//       <div className="checkoutProduct__info">
//         <p className="checkoutProduct__title">{title}</p>
//         <p className="checkoutProduct__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="checkoutProduct__rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>🌟</p>
//             ))}
//         </div>
//         {!hideButton && (
//           <button onClick={removeFromBasket}>Remove from Basket</button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CheckoutProduct;

import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
    toast("Item removed from basket!");
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((rate) => (
              <p>⭐</p>
            ))}
        </p>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;