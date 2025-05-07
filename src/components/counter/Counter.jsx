import React, { useContext, useState } from 'react';
import ButtonCount from "../button/ButtonCount";


function Counter ({setCannoliCount, cannoliCount, addToCart, removeFromCart}) {

    function handleAddToCart() {
       addToCart && addToCart();
       setCannoliCount(cannoliCount +1)
    }

   function handleRemoveFromCart()  {
       setCannoliCount(cannoliCount -1)
       removeFromCart && removeFromCart(cannoliCount);
     };

    return (
        <>
            <ButtonCount type="button" disabled={cannoliCount === 0} clickHandler={ handleRemoveFromCart}>
                -
            </ButtonCount>

            <p>{cannoliCount}</p>
            <ButtonCount type="button" clickHandler={handleAddToCart}>
                +
            </ButtonCount>
        </>
    )
}

export default Counter;

