import styled from 'styled-components';
import useCarrinhoContext from '../../../hooks/useCartContext';
import ValueFormated from "../../ValueFormated";

const StyledDiv = styled.div`
    height: 40vh;
    max-width: 25%;


    @media (max-width: 992px) {
        max-width: 50%;
    }

    .image-box {
        display: flex;
        position: relative;
        flex-direction: column;
        width: 100%;
    }

    .image-box > .btn {
        position: absolute;
        display: flex;
        padding: 5px;
        gap: 5px;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        left: 50%;
        top: 90%;
        width: 175px;
        cursor: auto;
        transform: translateX(-50%);

        @media (max-width: 1400px) {
            width: 200px;
        }

        @media (max-width: 470px) {
            width: 150px;
            height: 40px;
        }
    }
    
    .image-box > .btn-cart {
        color: var(--rose900);
        font-weight: 700;
        font-size: 0.8rem;
        border: 2px solid var(--rose300);
        background-color: #fff;
        cursor: pointer;
    }
  
    
    .image-box > .btn-active {
        justify-content: space-between;
        background-color: var(--red);
        color: #fff;
        border: none;
        font-size: 0.9rem;
        font-weight: 700;
    }

    .bi-dash-circle, .bi-plus-circle {
        cursor: pointer;
    }



    .bi-cart-plus {
        color: var(--red);
    }


    .text-box {
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        @media (max-width: 400px) {
            row-gap: 16px;
        }
    }

    .category-text {
        font-weight: 300;
        color: var(--rose500);
    }

    .name-text {
        font-weight: 700;
        color: var(--rose900);
    }

    .price-text {
        font-weight: 700;
        color: var(--red);
    }
`

const ImgStyled = styled.img`
        border-radius: 16px;
        border: ${(prop) => prop.$active ? '3px solid var(--red)' : 'none'};
    `

function ProductCard({ product }) {

    const { 
        addProduct,
        removeProduct,
        productsCart
    } = useCarrinhoContext();

    const productSelected = productsCart.find((item) => item.id === product.id);


    return (
        <StyledDiv>
            <div className="image-box">
                <ImgStyled src={product.image.desktop} alt={product.name} $active={productSelected} />
                <button
                    className={productSelected ? 'btn btn-active' : 'btn btn-cart'}
                    onClick={() => {
                        if (!productSelected) {
                            addProduct(product.id, product.name, product.price)
                        }
                    }}
                >
                    {productSelected ?
                        <>
                            <i 
                                className="bi bi-dash-circle fs-5 mx-3"
                                onClick={() => {
                                    removeProduct(productSelected.id, productSelected.amount)
                                }}
                            >    
                            </i>
                            {productSelected.amount}
                            <i
                                className="bi bi-plus-circle fs-5 mx-3"
                                onClick={() => addProduct(product.id, product.name, product.price)}
                            >
                            </i>
                        </>
                        :
                        <>
                            <i className="bi bi-cart-plus fs-5"></i>
                            Adicione no Carrinho
                        </>}
                </button>
            </div>
            <div className='text-box pt-sm-4 pt-5'>
                <p className='category-text'>{product.category}</p>
                <p className='name-text'>{product.name}</p>
                <p className='price-text'>
                    <ValueFormated value={product.price} />
                </p>
            </div>
        </StyledDiv>
    )
}


export default ProductCard;