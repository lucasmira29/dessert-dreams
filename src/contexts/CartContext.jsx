import { createContext, useEffect, useMemo, useState } from "react";



export const CartContext = createContext();
CartContext.displayName = "Carrinho";

function CartProvider({ children }) {
    const [productsCart, setProductsCart] = useState([]);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);

    const [toggleLoading, setToggleLoading] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);

    const { amountTemp, totalTemp } = useMemo(() => {
        return productsCart.reduce((acc, item) => {
            acc.amountTemp += item.amount;
            acc.totalTemp += item.price * item.amount;
            return acc
        }, {
            amountTemp: 0,
            totalTemp: 0,
        }
        );
    }, [productsCart]);

    useEffect(() => {
        setAmount(amountTemp);
        setTotal(totalTemp);
    })

    return (
        <CartContext.Provider value={{
            productsCart,
            setProductsCart,
            amount,
            total,
            toggleLoading,
            setToggleLoading,
            toggleModal,
            setToggleModal,
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;