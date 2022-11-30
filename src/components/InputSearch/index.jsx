import { InputDefault, InputDefaultButton} from "../../styles/components/inputs";
import { StyledInputSearch } from "./style";

export const InputSearch = ({
  setFilteredWord,
}) => {
  const setFilter = (e) => {
    e.preventDefault();
    
    setFilteredWord(e.target.value);
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
