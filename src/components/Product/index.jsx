import { StyledProduct } from "../../styles/components/cards";
import { StyledButton } from "../../styles/components/buttons";
import { Heading3, Caption, Body } from "../../styles/components/typography";
import { toast } from "react-toastify";

export const Product = ({
  product,
  setCurrentSale,
  currentSale,
  setProductsCount,
  productsCount,
}) => {

  const addProduct = (e) => {
    e.preventDefault();

    if (currentSale.filter((item) => product.id === item.id).length === 0) {
      setCurrentSale([...currentSale, product]);
      toast.success("Produto adicionado ao carrinho");
    } else {
      toast.info("Produto já adicionado");
    }

    setProductsCount((oldList) => {
      oldList[product.id - 1]++;
      return oldList;
    });
  };

  const removeProduct = (e) => {
    e.preventDefault();

    toast.error("Produto removido");

    setProductsCount((oldList) => {
      oldList[product.id - 1] = 0;
      return oldList;
    });

    setCurrentSale((oldList) => {
      return oldList.filter((item) => item.id != product.id);
    });
  };

  const { name, category, price, img } = product;
  return (
    <StyledProduct>
      <div className="imgConatiner">
        <img src={img} alt={name} />
      </div>
      <div className="infosConatiner">
        <Heading3 color="grey100">{name}</Heading3>
        <Caption color="grey50">{category}</Caption>
        <Body color="primary100">{price.toLocaleString("pt-br", {style: "currency",currency: "BRL",})}</Body>
        <div>
        {productsCount[product.id - 1] > 0 ?
          <>
            <StyledButton size="medium" color="grey" onClick={addProduct}>Adicionar</StyledButton>
            <StyledButton size="medium" color="grey" onClick={removeProduct}>Remover</StyledButton>
          </> :
          <StyledButton size="medium" color="primary" onClick={addProduct}>Adicionar</StyledButton> 
        }          
        </div>
      </div>
    </StyledProduct>
  );
};
