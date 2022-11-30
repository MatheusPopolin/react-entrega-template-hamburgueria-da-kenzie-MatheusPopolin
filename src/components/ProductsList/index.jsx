import { Product } from "../Product";
import { NotFound, StyledProductsList } from "./style";
import { Heading1, Heading2 } from "../../styles/components/typography";

export const ProductsList = ({
  setCurrentSale,
  currentSale,
  filteredProducts,
  setProductsCount,
  productsCount,
}) => {
  
  return filteredProducts.length > 0 ? (
    <StyledProductsList>
      {filteredProducts.map((product, index) => (
        <Product
          key={index}
          product={product}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          setProductsCount={setProductsCount}
          productsCount={productsCount}
        />
      ))}
    </StyledProductsList>
  ) : (
    <NotFound>
      <Heading2>Nenhum produto encontado</Heading2>
      <Heading1>:´(</Heading1>
    </NotFound>
  );
};
