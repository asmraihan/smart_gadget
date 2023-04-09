import { Outlet, useLoaderData } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import { createContext, useState } from "react"


export const ProductContext = createContext([])
export const CartContext = createContext([])

const App = () => {

  const { cartArray, products } = useLoaderData()
  const [cart, setCart] = useState(cartArray)
  return (

    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <div className="min-h-[calc(100vh-156px)]"> {/* 88px header+68px footer = 156px*/}
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </CartContext.Provider>
    </ProductContext.Provider>

  )
}

export default App
