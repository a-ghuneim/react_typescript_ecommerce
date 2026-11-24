import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import "./css/styles.css";
import "./css/bootstrap.min.css";
import App from './App.tsx'
import CartProvider from './contexts/CartProvider'
import WishlistProvider from './contexts/WishlistProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
