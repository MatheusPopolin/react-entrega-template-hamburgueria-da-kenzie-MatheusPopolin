import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-grey0);
  color: var(--color-grey100);

  height: 140px;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;

  @media (min-width: 414px) {
    height: 80px;

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
    }
  }
`;
