import styled from "styled-components";

export const StyledCart = styled.aside`
  width: 100%;
  max-width: 365px;
  height: min-content;
  margin: 0 auto;

  background: var(--color-grey0);

  @media (min-width: 740px) {
    margin: 0;
  }

  & .CartTop {
    background-color: var(--color-primary100);

    display: flex;
    align-items: center;

    height: 65px;
    border-radius: var(--radius2) var(--radius2) 0px 0px;
    padding: 0 20px;
  }

  & .EmptyCart {
    height: 158px;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 0px 0px var(--radius2) var(--radius2);
  }

  & ul {
    padding: 20px 20px 0 20px;

    max-height: 320px;
    overflow-y: auto;
  }

  & .CartTotal {
    height: 142px;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    border-top: 2px solid var(--color-grey20);
    border-radius: 0px 0px var(--radius2) var(--radius2);
  }

  & .CartTotal > div {
    display: flex;
    justify-content: space-between;
  }
`;
