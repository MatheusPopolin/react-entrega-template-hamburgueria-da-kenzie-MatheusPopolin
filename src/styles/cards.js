import styled from "styled-components";

export const StyledProduct = styled.li`
  max-width: 300px;
  height: 346px;
  background: var(--color-grey0);
  border: 2px solid var(--color-grey20);
  border-radius: var(--radius2);

  display: flex;
  flex-direction: column;
  gap: 1.625rem;

  img {
    height: 150px;
  }

  .infosConatiner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.875rem;
  }

  :hover {
    border: 2px solid var(--color-grey100);
  }

  :focus {
    border: 2px solid var(--color-grey100);
  }
`;

export const StyledCartProduct = styled.li`
  max-width: 343px;
  height: 80px;

  img {
    height: 80px;
    width: 80px;
  }

  .infosContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .infosContainer button {
    position: absolute;
    top: 7px;
    right: 0;
  }

  .infosContainer button:hover {
    text-decoration-line: underline;
    color: var(--color-grey100);
  }
`;
