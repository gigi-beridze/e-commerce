import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider, useShoppingCart } from "./context/ShoppingCartContext"
import { Checkout } from "./pages/Checkout"
import { Payment } from "./pages/Payment"
import { PageNotFound } from "./pages/PageNotFound"

const App = () => {
  const { closeCart, cartItems } = useShoppingCart()
  return ( 
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
