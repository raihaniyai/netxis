import { css } from '@emotion/css';

export const Background = css`
  margin: 16px 0;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.40));
`;

export const CardContainer = css`
  position: relative;
  text-align: center;
  color: white;
  width: 100%;
`;

export const CardTitle = css`
  position: absolute;
  top: 40%;
  left: 120px;
  // left: 160px;
  transform: translate(-50%, -50%);
  font-family: Racing Sans One;
  font-size: 240%;
  width: 100%;
`;

export const CardSubtitle = css`
  position: absolute;
  top: 63%;
  left: 115px;
  // left: 125px;
  transform: translate(-50%, -50%);
  font-size: 130%;
  width: 100%;
`;