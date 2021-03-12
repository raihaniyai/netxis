import { css } from '@emotion/css';
import { N0, N600 } from 'unify-token/build/v2/colors';

export const Header = css`
  background: ${N600};
  height: 25%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  color: ${N0};
  display: flex;
`;

export const Title = css`
  font-size: 24px;
  font-weight: 600;
  margin: 4% 4%;
`;

export const InputStyle = css`
  border-radius: 8px;
  margin: 8px 0px;
`;

export const Container = css`
  padding: 5% 5% 0 5%;
  height: 100%;
`;

export const ProductContainer = css`
  margin-top: 16px;
`;

export const ProductWrapper = css`
  height: 160px;
  width: 100%;
  background: ${N0};
  border-radius: 12px;
  box-shadow: -4px -8px 24px rgba(0, 0, 0, 0.025), 4px 8px 24px rgba(0, 0, 0, 0.025);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductLogo = css`
  height: 64px;
  max-width: 100%;
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: 12px;
`;

export const ProductName = css`
  font-weight: 600;
`;