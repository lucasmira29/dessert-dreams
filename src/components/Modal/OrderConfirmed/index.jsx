import styled from "styled-components";
import ProductConfirmed from "./ProductConfirmed";
import useCarrinhoContext from "../../../hooks/useCartContext";
import formatCurrency from "../../../utils/formatCurrency";

const SectionStyled = styled.section`
    background-color: var(--rose100);
    border-radius: 10px;
    padding: 24px;
    width: 100%;
    min-height: 40vh;
    max-height: 115vh;
    margin-bottom: 10%;


    @media (max-width: 576px) {
        max-height: 120vh;
    }

    @media (max-height: 750px) {
        max-height: 250vh;
    }

`

function OrderConfirmed() {
    
    const { productsCart, total } = useCarrinhoContext();
    
    
    return (
        <SectionStyled>
            {productsCart.map((item) => {
                return (
                    <ProductConfirmed key={item.id} product={item}/>
                )
            })}
            <div className="d-flex align-items-center justify-content-between pt-5">
                <p>Total</p>
                <span className="total-order fw-bold fs-4 ">{formatCurrency(total)}</span>
            </div>
        </SectionStyled>
    )
}


export default OrderConfirmed;