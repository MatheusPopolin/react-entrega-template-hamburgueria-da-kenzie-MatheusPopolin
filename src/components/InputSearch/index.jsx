import { InputDefault, InputDefaultButton} from "../../styles/components/inputs";
import { StyledInputSearch } from "./style";

export const InputSearch = ({
  products,
  setFilteredProducts,
  setFilteredWord,
}) => {
  const setFilter = (e) => {
    e.preventDefault();

    const filteredProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        product.category.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    
    setFilteredWord(e.target.value);
    setFilteredProducts(filteredProducts);
  };

  return (
    <StyledInputSearch>
      <InputDefault
        onChange={setFilter}
        type="text"
        placeholder="Digitar pesquisa"
      />
      <InputDefaultButton>Pesquisar</InputDefaultButton>
    </StyledInputSearch>
  );
};
