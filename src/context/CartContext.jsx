import React, { useEffect, useMemo, useState } from 'react';

export const CartContext = React.createContext(null);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
        try {
            const stored = localStorage.getItem("cart");
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch { /* empty */ }
        }, [cart]);

    const clearCart = () => {
        setCart([]);
        try {
            localStorage.removeItem('cart');
        } catch { /* empty */ }
    };

    const value = useMemo(() => ({ cart, setCart, clearCart }), [cart]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};

