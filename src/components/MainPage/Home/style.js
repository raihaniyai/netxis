import { css } from '@emotion/css';

export const Container = css`
  padding: 5% 5% 0 5%;
  height: 100%;
  z-index: 10;
  position: relative;
`;

export const BackgroundContainer = css`
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Background = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #F3F4F5;
`;

export const HeaderBox = css `
  width: 100%;
  height: 16%;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  background: #1E1E3F;
  border-radius: 0 0 27px 27px;
`

export const GachaButton = css `
  z-index: 15;
  position: sticky;
  width: 17%;
  float: right;
  bottom: 18%;
  align-items: center;
  justify-content: center;
  font-size: 70%;
`

export const Countdown = css `
  background: #404EFB;
  border-radius: 38px;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-left: 13%;
  width: 75%;
  font-size: 8px;
  text-align: center;
  color: #FFFFFF;
`