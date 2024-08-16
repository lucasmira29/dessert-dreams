import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';




function useCarrinhoContext() {
    const {
        productsCart,
        setProductsCart,
        amount,
        total,
        toggleLoading,
        setToggleLoading,
        toggleModal,
        setToggleModal,
    } = useContext(CartContext);

    function addProduct(id, name, price) {
        setProductsCart((prevProductsCart) => {
            const existingProduct = prevProductsCart.find((product) => product && product.id === id);

            if (existingProduct) {
                return prevProductsCart.map((product) => 
                    product && product.id === id ? {
                        ...product,
                        amount: product.amount + 1
                    } : product
                );
            } else {
                return [...prevProductsCart, {
                    id: id,
                    name: name,
                    price: price,
                    amount: 1
                }];
            }
        });
    }
    
    function deleteProduct(id) {
        setProductsCart(productsCart.filter((product) => product.id !== id))
    }

    function removeProduct(id, amount) {
        
        if (amount === 1) {
            deleteProduct(id);
        }

        setProductsCart((prevProductsCart) => {
            return prevProductsCart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        amount: product.amount - 1,
                    }
                }
                    return product
            })
        })

    }


    function handleButtonClick() {
        setToggleLoading(true);
        
        setTimeout(() => {
            setToggleLoading(false);
            setToggleModal(true);
        }, 2000);

    }

    return {
        productsCart,
        setProductsCart,
        addProduct,
        deleteProduct,
        removeProduct,
        amount,
        total,
        toggleLoading,
        setToggleLoading,
        handleButtonClick,
        toggleModal,
        setToggleModal,
    }
}

export default useCarrinhoContext;