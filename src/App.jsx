import { useEffect, useState } from 'react'
import { ProductsList } from './components/ProductsList'
import { InputSearch } from './components/InputSearch'
import { Cart } from './components/Cart'


export const App = () => { 
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  
  useEffect(()=>{
    setCartTotal(currentSale.reduce((total, currenteValue)=>total + currenteValue.price,0))
  },[currentSale])

  useEffect(()=>{
    const getProductsInApi = async () =>{
      const responseJson = await fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      const response = await responseJson.json()
      setProducts(response)
    }
    getProductsInApi()
  },[])

   
  return (
    <div className='App'>
      <header>
        <h1>Burger <span>Kenzie</span></h1>
        <InputSearch products={products} setFilteredProducts={setFilteredProducts}/>
      </header>
      <main>
        <section>
          <ProductsList products={products} setCurrentSale={setCurrentSale} filteredProducts={filteredProducts}/>
        </section>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} cartTotal={cartTotal}/>
      </main>
      
    </div>
  )
}

