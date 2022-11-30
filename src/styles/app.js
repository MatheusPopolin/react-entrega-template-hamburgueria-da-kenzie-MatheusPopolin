import styled from "styled-components";

export const StyledApp = styled.div`
  background-color: var(--color-white);
  margin-top: 156px;
  margin-bottom: 16px;

  

  & .findRespost{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }

  @media (min-width: 414px) {
    margin-top: 96px;
  }

  @media (min-width: 740px) {
    & main {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 20px;
    }
    & main > section{
      width: 100%;
    }
  }
`;
