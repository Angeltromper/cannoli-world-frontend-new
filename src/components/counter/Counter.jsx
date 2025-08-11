import React from 'react';
import ButtonCount from "../button/ButtonCount";

function Counter({ setCannoliCount, cannoliCount, addToCart, removeFromCart }) {

    function handleAddToCart() {
        if (addToCart) {
            addToCart();
        }
        setCannoliCount(cannoliCount + 1);
    }

    function handleRemoveFromCart() {
        if (cannoliCount > 0) {
            if (removeFromCart) {
                removeFromCart();
            }
            setCannoliCount(cannoliCount - 1);
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ButtonCount
                type="button"
                disabled={cannoliCount === 0}
                clickHandler={handleRemoveFromCart}
            >
                -
            </ButtonCount>

            <p style={{ margin: 0 }}>{cannoliCount}</p>

            <ButtonCount
                type="button"
                clickHandler={handleAddToCart}
            >
                +
            </ButtonCount>
        </div>
    );
}

export default Counter;






