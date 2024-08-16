import styled from "styled-components";
import { useEffect, useRef } from "react";
import useCarrinhoContext from "../../hooks/useCartContext";
import { Button } from "../Button";
import OrderConfirmed from "./OrderConfirmed";
import { scroller } from 'react-scroll';


const Overlay = styled.div`
    display: ${(props) => props.$active ? 'block' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`


const DialogStyled = styled.dialog`
    padding: 35px;
    gap: 20px;
    top: 10%;
    left: 0;
    background-color: #fff;
    max-height: 150vh;
    height: auto;
    width: 30%;
    border: none;
    border-radius: 10px;


    @media (max-width: 1400px) {
        min-width: 400px;
        width: 50%;
    }

    @media (max-width: 380px) {
        min-width: 350px;
        padding: 10px;
    }

    @media (max-height: 786px) {
        max-height:  250vh;
    }

    @media (max-height: 473px) {
        max-height:  350vh;
    }



    .bi-check-circle {
        color: var(--green);
    }

    h2 {
        color: var(--rose900);
    }

    .text-description {
        color: var(--rose400);
        font-weight: 400;
    }

    
`


function Modal() {

    const { toggleModal, setToggleModal, setProductsCart, } = useCarrinhoContext();

    const modalRef = useRef(null);

    useEffect(() => {
        if (toggleModal && modalRef.current) {
            scroller.scrollTo(modalRef.current.id, {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }
    }, [toggleModal]);

    return (
        <>
            <Overlay $active={toggleModal} />
            <DialogStyled open={toggleModal} ref={modalRef} id="modal">
                <i className="bi bi-check-circle fs-1"></i>
                <div className="d-flex flex-column py-4 gap-2">
                    <h2 className="fs-2 fw-bold">Pedido Confirmado</h2>
                    <span className="text-description">Esperamos que você goste da sua comida!</span>
                </div>
                <OrderConfirmed />
                    <Button onClick={() => {
                        setToggleModal(false);
                        setProductsCart([]);
                    }}>
                        Fazer Outro Pedido
                    </Button>
            </DialogStyled>
        </>
    )
}



export default Modal;