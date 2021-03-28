import { css } from '@emotion/css';

export const Background = css`
  margin: 16px 0;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.40));
`;

export const TextContainer = css`
  position: absolute;
  top: 40%;
  left: 36%;
  transform: translate(-40%, -40%);
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: center;
  width: 100%;
  padding: 10%;
  `;

export const CardContainer = css`
  position: relative;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: center;
  width: 100%;
`;

export const CardTitle = css`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-40%, -40%);
  font-family: Racing Sans One;
  font-size: 240%;
  width: 90%;
  text-align: left;
`;

export const CardTitle1 = css`
  font-family: Racing Sans One;
  font-size: 1.5rem;
  width: 90%;
  text-align: left;
`;

export const CardSubtitle1 = css`
  font-size: 0.8rem;
  width: 90%;
  text-align: left;
`;

export const CardSubtitle = css`
  position: absolute;
  top: 63%;
  left: 50%;
  transform: translate(-40%, -40%);
  font-size: 130%;
  width: 90%;
  text-align: left;
`;