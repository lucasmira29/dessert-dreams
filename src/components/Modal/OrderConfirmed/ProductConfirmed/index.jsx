import styled from "styled-components";
import formatCurrency from "../../../../utils/formatCurrency.js"
import productsData from "../../../../../data.json"; 

const ContainerStyled = styled.div`
    border-bottom: 1px solid gainsboro;

    .container {
        display: flex;
        padding: 10px 0 20px 0;
        justify-content: space-between;
        align-items: center;
    }

    img {
        width: 50px;
        border-radius: 5px;
    }

    .amount-text {
        font-size: 0.9rem;
        color: var(--red);
    }

    .price-text {
        font-size: 0.9rem;
        color: var(--rose500);
    }

    .total-item-text {
        color: var(--rose900);
    }
`


function ProductConfirmed( { product } ) {
    
    const itemProduct = productsData.find((item) => item.id === product.id);
    
    
    return (
        <ContainerStyled>
            <div className="container">
                <div className="d-flex gap-4">
                    <img src={itemProduct.image.thumbnail} alt={product.name} draggable="false" />
                    <div className="d-flex flex-column gap-2">
                        <h4>{product.name}</h4>
                        <div className="d-flex gap-4">
                            <span className="amount-text fw-bold">{`${product.amount}x`}</span>
                            <span className="price-text">{formatCurrency(product.price)}</span>
                        </div>
                    </div>
                </div>
                <span className="total-item-text fw-bold">{formatCurrency(product.price * product.amount)}</span>
            </div>
        </ContainerStyled>
    )
}


export default ProductConfirmed;