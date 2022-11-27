import styled from "styled-components";

export const ButtonPrimary = styled.button`
  {size} ? Medium height: 40px; : height: 60px;  
  
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

export const ButtonGrey = styled.button`
  {size} ? Medium height: 40px; : height: 60px; 
  
  padding: 0px 20px;
  background: var(--color-grey20);
  border-radius: var(--radius1);

  font-weight: 600;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: var(--color-grey50);
  
  :hover {
      background: var(--color-grey50);
      color: var(--color-grey20);
  }
`;
