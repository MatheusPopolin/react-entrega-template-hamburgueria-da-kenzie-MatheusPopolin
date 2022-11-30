import { useEffect, useState } from "react";
import { api } from "./api/api";
import { StyledApp } from "./styles/app";
import { StyledHeader } from "./styles/components/header";
import { Container } from "./styles/components/container";
import { Logo } from "./styles/components/logo";
import { StyledButton } from "./styles/components/buttons";
import { InputSearch } from "./components/InputSearch";
import { Heading1 } from "./styles/components/typography";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredWord, setFilteredWord] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [productsCount, setProductsCount] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    setCartTotal(
      currentSale.reduce(
        (total, currenteValue) => total + currenteValue.price,
        0
      )
    );
  }, [currentSale]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <StyledApp className="App">
      <StyledHeader>
        <Container>
          <Logo>
            Burger <span>Kenzie</span>
          </Logo>
          <InputSearch
            products={products}
            setFilteredProducts={setFilteredProducts}
            setFilteredWord={setFilteredWord}
          />
        </Container>
      </StyledHeader>
      <Container>
        <main>
          <section>
            {filteredWord && (
              <div className="findRespost">
                <Heading1 color="grey100">
                  Resultados para: {filteredWord}
                </Heading1>
                <StyledButton onClick={()=>setFilteredWord("")} color="primary" size="medium">Limpar Buscar</StyledButton>
              </div>
            )}
            <ProductsList
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
              filteredProducts={filteredProducts}
              setProductsCount={setProductsCount}
              productsCount={productsCount}
            />
          </section>
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setProductsCount={setProductsCount}
          />
        </main>
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </StyledApp>
  );
};
