import styled, { css } from 'styled-components';
import { typographyColor } from './colors';

const textStyle = css`
  font-weight: 400;
  color: ${props => props.light ? typographyColor.light : typographyColor.dark};
  text-transform: ${props => props.uppercase ? 'Uppercase' : ''};
  letter-spacing: ${props => props.uppercase ? '0.3rem' : '0.05rem'};
`;

const H1 = styled.h1`
  ${textStyle}
  font-size: 3.4rem;
`;

const H2 = styled.h2`
  ${textStyle}
  font-size: 3rem;
`;

const H3 = styled.h3`
  ${textStyle}
  font-size: 2.8rem;
`;

const H4 = styled.h4`
  ${textStyle}
  font-size: 2.4rem;
`;

const H5 = styled.h5`
  ${textStyle}
  font-size: 2.2rem;
`;

const H6 = styled.h6`
  ${textStyle}
  font-size: 1.4rem;
`;

const Span = styled.span`
  ${textStyle}
  font-size: 1.7rem;
  line-height: 1.6;
`;

const P = styled.p`
  display: block;
  ${textStyle}
  font-size: 1.7rem;
  line-height: 1.6;
`;

export { H1, H2, H3, H4, H5, H6, Span, P };