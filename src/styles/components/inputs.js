import styled from "styled-components";

//Para complementar a estilização envovler o input e o button em uma div, que devera ter postion relative e o tamanho exato do input
export const InputDefault = styled.input`
  width: 100%;
  max-width: 382px;
  height: 60px;
  padding: 0px 10px 0px 20px;

  background: var(--color-grey0);
  border: 2px solid var(--color-grey20);
  border-radius: var(--radius1);

  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: var(--color-grey50);

  &::placeholder {
    color: var(--color-grey20);
  }

  &:focus {
    border: 2px solid var(--color-grey100);
  }
`;

export const InputDefaultButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  height: 40px;
  padding: 0px 20px;
  background: var(--color-primary100);
  border-radius: var(--radius1);

  font-weight: 600;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: var(--color-grey0);

  :hover {
    background: var(--color-primary500);
  }
`;
