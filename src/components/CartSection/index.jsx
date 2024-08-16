import styled from "styled-components";
import illustrationEmptyCart from '../../assets/illustration-empty-cart.png';
import useCarrinhoContext from "../../hooks/useCartContext";
import ProductCart from "./ProductCart";
import CarbonIcon from "../../assets/icon-carbon-neutral.png";
import { Button } from "../Button";
import ValueFormated from "../ValueFormated";
import LoadingSpinner from "../LoadingSpinner";

const SectionStyled = styled.section`
    position: relative;
    background-color: #fff;
    background-image: ${(props) => props.$havetheproduct ? `url(${illustrationEmptyCart})` : 'none'};
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    padding: 24px;
    width: 40%;
    min-height: 40vh;
    height: ${(props) => props.$productlength > 0 ? `calc(30vh + ${props.$productlength * 10}vh)` : '40vh'};
    max-height: 130vh;
    margin-top: 10%;


 

    @media (max-width: 992px) {
        width: 60%;
    }

    @media (max-height: 860px) {
        width: 70%;
        max-height: 200vh;
        height: auto;
    }
    
    @media (max-width: 576px) {
        width: 70%;
        margin-top: 120px;
    }

    

    h2 {
        color: var(--red);
        font-weight: 700;
        padding-bottom: 24px;
    }

    .cart-description {
        position: absolute;
        top: 70%;
        left: 15%;
        display: inline;
        width: fit-content;
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--rose500);

        @media (max-width: 576px) {
            font-size: 0.7rem;
            left: 70%;
            transform: translateX(-50%);
            width: 100%;
        }

        @media (max-width: 576px) {
            font-size: 0.7rem;
            left: 70%;
            transform: translateX(-50%);
            width: 100%;
        }

        @media (max-width: 410px) {
            font-size: 0.7rem;
            left: 60%;
            transform: translateX(-50%);
            width: 100%;
        }
    }

    .total-text {
        display: flex;
        justify-content: space-between;
    }

    .carbon-neutral {
        margin-top: 2em;
        padding: 16px;
        background-color: var(--rose50);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 0.9rem;

        strong {
            font-weight: 700;
        }

        @media (max-width: 1400px) {
            margin-top: 5%;
            margin-bottom: 10%;
        }

        @media (max-width: 760px) {
            margin-top: 25%;
            margin-bottom: 25%;
        }
    }

    .btn {
        position: absolute;
        border: none;
        left: 5%;
        right: 5%;
        width: 90%;
        bottom: 5px;
    }

`;

function CartSection() {
    const { productsCart,
        total,
        amount,
        toggleLoading,
        handleButtonClick,
    } = useCarrinhoContext();

  
    if (productsCart.length === 0) {
        return (
            <SectionStyled $havetheproduct={productsCart.length === 0}>
                <h2 className="fs-4">Seu carrinho (0)</h2>
                <p className="cart-description">Os itens adicionados aparecerão aqui</p>
            </SectionStyled>
        );
    }

    return (
        <SectionStyled $productlength={productsCart.length}>
            <h2 className="fs-4">Seu carrinho ({amount})</h2>
            <div className="cart-items">
                {productsCart.map((item, index) => {
                    return (
                        <ProductCart product={item} key={index} />
                    )
                })}
            </div>
            <p className="total-text">
                Total
                <span className="fs-4 fw-bold">
                    <ValueFormated value={total} />
                </span>
            </p>

            <div className="carbon-neutral">
                <img src={CarbonIcon} alt="Ícone Árvore" draggable="false" />
                <p>Esta é uma entrega <strong>neutra em carbono.</strong></p>
            </div>
            <div className="btn">
                <Button onClick={() => handleButtonClick()}>
                   {toggleLoading ? <LoadingSpinner/> : 'Confirmar Pedido'}
                </Button>
            </div>
        </SectionStyled>
    );
}

export default CartSection;
