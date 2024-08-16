import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: var(--red);
    width: 100%;
    height: 20vh;
    margin-top: 30px;
    gap: 10px;
    color: #333;

    @media (max-width: 502px) {
        font-size: 0.9rem;
    }


    .social-media {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .social-media > a {
        text-decoration: none;
        color: #333;
    }

`


function Footer() {
    return (
        <FooterStyled>
            <p>&copy; 2024 Dessert Dreams. Todos os direitos reservados.</p>
            <p>Este é um site fictício criado para fins de demonstração.</p>
            <p>Desenvolvido por Lucas de Mira.</p>
            <div className="social-media">
            <a href="https://www.linkedin.com/in/lucas-de-mira/" target="_blank">
                <i className="bi bi-linkedin fs-5"></i>
            </a>
            <a href="https://github.com/lucasmira29" target="_blank">
                <i className="bi bi-github fs-5"></i>
            </a>
            </div>
        </FooterStyled>
    )
}


export default Footer;