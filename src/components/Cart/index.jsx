import { Product } from "./Product";
import { Heading3, Body, Headline } from "../../styles/components/typography";
import { StyledButton } from "../../styles/components/buttons";
import { StyledCart } from "./style";
import { toast } from "react-toastify";

export const Cart = ({
  currentSale,
  setCurrentSale,
  cartTotal,
  setProductsCount,
}) => {

  const handleClick = (e) => {
    e.preventDefault();

    toast.error("Produtos removidos com sucesso");

    setProductsCount([0, 0, 0, 0, 0, 0]);
    setCurrentSale([]);
  };

  return (
    <StyledCart>
      <div className="CartTop">
        <Heading3 color="white">Carrinho de compras</Heading3>
      </div>
      {currentSale.length > 0 ? (
        <>
          <ul>
            {currentSale.map((product, index) => (
              <Product
                key={index}
                product={product}
                setCurrentSale={setCurrentSale}
                setProductsCount={setProductsCount}
              />
            ))}
          </ul>
          
          <div className="CartTotal">
            <div>
              <Headline color="grey100">Total</Headline>
              <Body color="grey50">
                {cartTotal.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Body>
            </div>
            <StyledButton size="default" color="grey" onClick={handleClick}>
              Remover Todos
            </StyledButton>
          </div>
        </>
      ) : (
        <div className="EmptyCart">
          <Heading3 color="grey100">Sua sacola está vazia</Heading3>
          <Body color="grey50">Adicione Itens</Body>
        </div>
      )}
    </StyledCart>
  );
};
