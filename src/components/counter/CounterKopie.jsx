/*import React, { useContext } from 'react';
import ButtonCount from "../button/ButtonCount";

function Counter ({setCannoliCount, cannoliCount, addToCart, removeFromCart}) {

    function handleAddToCart() {
        addToCart && addToCart();
        setCannoliCount(cannoliCount +1)
    }

    function handleremoveFromCart() {
        removeFromCart && removeFromCart ();
        setCannoliCount(cannoliCount - 1);
    }

    return (
        <>
            <ButtonCount type="button" disabled={cannoliCount === 0} clickHandler={() => setCannoliCount(cannoliCount - 1)}>
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

*/
