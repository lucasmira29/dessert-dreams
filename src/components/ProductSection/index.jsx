import styled from "styled-components";
import products from '../../../data.json';
import ProductCard from "./ProductCard";

const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 992px) {
        align-items: center;
    }
    


    h2 {
        display: inline-block;
        width: 100%;
        color: var(--rose900);

        @media (max-width: 1400px) {
            padding: 5%;
        }

        @media (max-width: 992px) {
            padding-left: 0;
            text-align: center;
        }
    }

    .product-container {
        display: flex;
        width: 100%;
        gap: 24px;
        flex-wrap: wrap;

        @media (max-width: 1400px) {
            justify-content: center;
        }

        @media (max-width: 992px) {
            flex-direction: column;
            align-items: center;
            gap: 30px;
        }

        
        @media (max-width: 576px) {
            flex-direction: column;
            align-items: center;
        }

        @media (max-height: 992px) {
            gap: 80px;
        }
    }
`


function ProductSection() {
    return (
        <SectionStyled>
            <h2 className="fs-2 py-5 fw-bold">Sobremesas</h2>
            <div className="product-container">
                  {products.map((item) => {
                    return (
                        <ProductCard key={item.id} product={item}/>
                    )
                  })}
            </div>
        </SectionStyled>
    )
}

export default ProductSection;