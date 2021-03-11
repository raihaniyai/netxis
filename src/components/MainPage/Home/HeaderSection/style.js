import { css } from '@emotion/css';
import { N0, N200 } from 'unify-token/build/v2/colors';

export const Header = css`
  display: flex;
  justify-content: space-between;
  margin: 0 8px;
`;

export const Icon = css`
  margin-left: 8px;
  font-size: 24px;
`;

export const RotateIcon = css`
  transform: rotate(-90deg);
  font-size: 24px;
`;

export const BalanceIcon = css`
  margin-left: 32px;
  font-size: 24px;
`;

export const Welcome = css`
  font-size: 14px;
`;

export const Username = css`
  font-size: 18px;
  font-weight: 600;
`;

export const WalletContainer = css`
  align-items: center;
  background: ${N0};
  border-radius: 20px;
  display: flex;
  height: 100px;
  width: 100%;
  margin: 24px 0 12px 0;
  justify-content: space-between;
  display: inline-blocks;
  box-shadow: -4px -8px 24px rgba(0, 0, 0, 0.025), 4px 8px 24px rgba(0, 0, 0, 0.025);
`;

export const BalanceContainer = css`
  margin-left: 24px;
`;

export const Balance = css`
  font-size: 24px;
  font-weight: 600;
`;

export const BalanceDescription = css`
  color: ${N200};
  font-size: 14px;
`;

export const BalanceAction = css`
  margin-right: 24px;
`;
