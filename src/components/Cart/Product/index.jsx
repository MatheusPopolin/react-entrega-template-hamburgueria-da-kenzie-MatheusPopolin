import { StyledCartProduct } from "../../../styles/components/cards";
import { Heading4, Caption } from "../../../styles/components/typography";
import { toast } from "react-toastify";

export const Product = ({ product, setCurrentSale, setProductsCount }) => {
  const handleClick = (e) => {
    e.preventDefault();

    toast.error("Produto Removido");

    setProductsCount((oldList) => {
      oldList[product.id - 1]--;
      return oldList;
    });

    setCurrentSale((oldList) => {
      return oldList.filter((item) => item.id != product.id);
    });
  };

  const {name, category, img } = product;
  return (
    <StyledCartProduct>
      <img src={img} alt={name} />
      <div className="infosContainer">
        <Heading4 color="grey100">{name}</Heading4>
        <Caption color="grey50">{category}</Caption>
        <button onClick={handleClick}>Remover</button>
      </div>
    </StyledCartProduct>
  );
};
