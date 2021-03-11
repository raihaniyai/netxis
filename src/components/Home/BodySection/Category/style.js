import { css } from '@emotion/css';
import { N0, N100, N400, N500 } from 'unify-token/build/v2/colors';

export const Container = css`
  width: -webkit-fill-available;
  background: ${N0};
  border-radius: 20px;
  margin: 12px 0;
  display: inline-block;
  padding: 16px;
  box-shadow: -4px -8px 24px rgba(0, 0, 0, 0.025), 4px 8px 24px rgba(0, 0, 0, 0.025);
`;

export const Title = css`
  font-weight: 600;
  color: ${N400};
  margin-bottom: 16px;
`;

export const OptionIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  background: ${N100};
  border-radius: 15px;
  text-align: center;
  font-size: 24px;
`;

export const Option = css`
  text-align: -webkit-center;
`;

export const OptionName = css`
  margin-top: 8px;
  text-align: center;
  font-size: 12px;
  color: ${N500}
`;
