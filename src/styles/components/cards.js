import styled from "styled-components";

export const StyledProduct = styled.li`
  min-width: 300px;
  height: 346px;
  background: var(--color-white);
  border: 2px solid var(--color-grey20);
  border-radius: var(--radius2);

  display: flex;
  flex-direction: column;
  gap: 1.625rem;

  & .imgConatiner {
    background: var(--color-grey0);
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  & .imgConatiner > img {
    height: 100%;
    object-fit: cover;
  }

  & .infosConatiner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.875rem;
    padding: 0 21px;
  }

  & .infosConatiner div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  :hover {
    border: 2px solid var(--color-grey100);
  }

  :focus {
    border: 2px solid var(--color-grey100);
  }
`;

export const StyledCartProduct = styled.li`
  width: 100%;
  max-width: 343px;
  height: 80px;

  display: flex;
  gap: 10px;

  margin-bottom: 20px;

  position: relative;

  & img {
    background-color: var(--color-grey20);

    border-radius: var(--radius2);

    height: 80px;
    max-width: 80px;
    object-fit: cover;
  }

  & .infosContainer {
    max-width: 263px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  & .infosContainer button {
    position: absolute;
    top: 7px;
    right: 0;

    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: var(--color-grey50);
  }

  & .infosContainer button:hover {
    text-decoration-line: underline;
    color: var(--color-grey100);
  }
`;
