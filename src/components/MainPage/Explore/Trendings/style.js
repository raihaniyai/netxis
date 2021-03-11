import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

export const TrendingWrapper = css`
  display: flex;
  background: ${N0};
  width: 100%;
  padding: 8px 16px;
  border-radius: 12px;
  align-items: center;
  box-shadow: -4px -8px 24px rgba(0, 0, 0, 0.025), 4px 8px 24px rgba(0, 0, 0, 0.025);
`;

export const ListStyle = css`
  margin-top: 8px;
  margin-bottom: 120px;
  display: inline-block;

  .ant-list-item {
    padding: 8px 0;
  }
`;

export const TrendingOrder = css`
  background: #8E97FD;
  height: 24px;
  width: 100px;
  max-width: 24px;
  margin-right: 12px;
  display: inline-block;
  text-align: center;
  color: ${N0};
  border-radius: 50px;
`;
