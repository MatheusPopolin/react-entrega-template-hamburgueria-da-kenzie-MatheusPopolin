import styled from "styled-components";

export const Heading1 = styled.h2`
  font-weight: 700;
  font-size: 1.625rem;
  line-height: 2.125rem;
  color: var(--color-${({ color }) => color});
`;
export const Heading2 = styled.h3`
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.5rem;
  color: var(--color-${({ color }) => color});
`;
export const Heading3 = styled.h4`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: var(--color-${({ color }) => color});
`;
export const Heading4 = styled.h5`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--color-${({ color }) => color});
`;
export const Headline = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--color-${({ color }) => color});
`;
export const Body = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--color-${({ color }) => color});
`;
export const Body600 = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--color-${({ color }) => color});
`;
export const Caption = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--color-${({ color }) => color});
`;
