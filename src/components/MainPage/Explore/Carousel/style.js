import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

export const ContentsContainer = css`
  margin-top: 16px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0px;
  }
`;

export const Content = css`
  background: ${N0};
  border-radius: 12px;
  box-shadow: -4px -8px 24px rgba(0, 0, 0, 0.025), 4px 8px 24px rgba(0, 0, 0, 0.025);
  overflow: hidden;
  width: 250px;
`;

export const ContentDesc = css`
  padding: 8px 16px;
`;

export const Thumbnail = css`
  width: 250px;
  max-height: 160px;
  object-fit: cover;
`;