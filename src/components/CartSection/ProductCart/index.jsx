import styled from "styled-components";
import useCarrinhoContext from "../../../hooks/useCartContext";
import ValueFormated from "../../ValueFormated";

    const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
        font-size: 0.9rem;
        color: var(--rose900);
    }

    hr {
        width: 95%;
    }
    
    `

    const PStyled = styled.p`
        position: relative;
        display: flex;
        align-items: center;
        gap: 24px;
        
        font-weight: 700;
        color: var(--rose500);

        @media (max-width: 382px) {
            gap: 12px;
        }

        .amount {
            font-size: 0.9rem;
            font-weight: 700;
            color: var(--red);
        }
        
        .price {
            font-weight: 300;
        }

        .bi-x-circle {
            position: absolute;
            left: 95%;
            cursor: pointer;
        }
    `

function ProductCart({ product }) {
    
        const { deleteProduct } = useCarrinhoContext();   

        return (
            <DivStyled>
                <h3 className="fw-bold">{product.name}</h3>
                <PStyled>
                    <span className="amount">{`${product.amount}x`}</span>
                    <span className="price"><ValueFormated value={product.price}/></span>
                        <ValueFormated value={product.price * product.amount}/>
                    <i className="bi bi-x-circle fs-5" onClick={() => deleteProduct(product.id)}></i>
                </PStyled>
                <hr/>
            </DivStyled>
        )
}



export default ProductCart;