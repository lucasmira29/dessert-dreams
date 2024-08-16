import styled from 'styled-components';
import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";
import ProductSection from './components/ProductSection';
import CartProvider from './contexts/CartContext';
import CartSection from './components/CartSection';
import Modal from './components/Modal';
import Footer from './components/Footer';

  const MainStyled = styled.main`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 1400px) {
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 502px) {
      padding: 0;
      margin: 0;
      
    }
  `


function App() {


  return (
    <>
      <CartProvider>
      <Header/>
      <MainStyled className='container'>
        <ProductSection/>
        <CartSection/>
      </MainStyled>
      <Modal/>
      <Footer/>
      </CartProvider>
      <GlobalStyle/>
    </>
  )
}

export default App
