import { css } from '@emotion/css';
import { N0, N400 } from 'unify-token/build/v2/colors';

export const Container = css`
  width: -webkit-fill-available;
  background: ${N0};
  border-radius: 20px;
  margin: 12px 0 120px 0;
  display: inline-block;
  padding: 16px;
  padding-bottom: 32px;
  box-shadow: -4px -8px 24px rgba(0, 0, 0, 0.025), 4px 8px 24px rgba(0, 0, 0, 0.025);
`;

export const Header = css`
  display: flex;
  justify-content: space-between;
`;

export const Title = css`
  font-weight: 600;
  color: ${N400};
  margin-bottom: 16px;
`;