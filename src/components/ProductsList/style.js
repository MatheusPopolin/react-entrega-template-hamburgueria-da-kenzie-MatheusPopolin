import styled from "styled-components";

export const StyledProductsList = styled.ul`
  display: flex;
  gap: 20px;

  max-width: 100%;
  overflow-x: scroll;

  margin-bottom: 20px;

  @media (min-width: 740px) {
    max-width: 940px;

    justify-content: center;

    overflow: unset;
    flex-wrap: wrap;
  }
`;

export const NotFound = styled.section`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
