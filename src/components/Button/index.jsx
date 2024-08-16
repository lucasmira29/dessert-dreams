import styled from "styled-components"
import useCarrinhoContext from "../../hooks/useCartContext"

const ButtonStyled = styled.button`
    background-color: var(--red);
    color: #fff;
    border: none;
    border-radius: 32px;
    width: 100%;
    max-height: 80px;
    height: 52px;
`



export function Button({ children, onClick }) {
    
    return (
    <ButtonStyled onClick={onClick}>
        {children}
    </ButtonStyled>
    )
}