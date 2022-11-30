import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton = styled.button`
  ${({ size }) => {
    switch (size) {
      case "default":
        return css`
          height: 60px;
        `;
      case "medium":
        return css`
          height: 40px;
        `;
    }
  }};

  padding: 0px 20px;
  border-radius: var(--radius1);

  font-weight: 600;
  font-size: 1rem;
  line-height: 1.1875rem;

  ${({ color }) => {
    switch (color) {
      case "primary":
        return css`
          background: var(--color-primary100);
          color: var(--color-grey0);

          &:hover {
            background: var(--color-primary500);
          }
        `;
      case "grey":
        return css`
          background: var(--color-grey20);
          color: var(--color-grey50);

          &:hover {
            background: var(--color-grey50);
            color: var(--color-grey20);
          }
        `;
    }
  }};
`;
