import styled from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/transparent-logo.png'

    const HeaderStyled = styled.header`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 12vh;
        background-color: var(--red);

    `

function Header() {
    return (
    <HeaderStyled>
        <div className='row'>
            <div className="col d-flex gap-3 flex-row align-items-center">
               <img src={logo} alt="Logo" width={"320px"} draggable="false"/>
            </div>
        </div>
    </HeaderStyled>
        
    )
        
}

export default Header;