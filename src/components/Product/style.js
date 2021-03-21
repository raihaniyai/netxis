import { css } from '@emotion/css';
import { N0 } from 'unify-token/build/v2/colors';

export const HeaderTitle = css`
  background: #1E1E3F;
  height: 55px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: inline;
  padding: 15px 23px;
  color: ${N0};
  font-size: 18px;
  font-weight: 500;
//   box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
`;

export const Container = css`
  width: 100%;
  background: #FFFFFF;
`;

export const Title = css`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #E4E6FD;
  color: #1E1E3F;
`;

export const DetailsContainer = css`
  padding: 5% 5% 0% 5%;
  width: 100%;
  // height: 100%;
  background: #FFFFFF;
  margin: 0 0 50px 0;
  display: flex;
  flex-direction: column;
  // justify-content: center;
`;

export const DetailsList = css`
  margin: 8px 120px 0 0;
  padding: 10px 20px;
  width: 100%;
  list-style: none;
  font-size: 16px;
  font-weight: 500;
  color: #1E1E3F;
`;

export const ButtonContainer = css`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const BuyButton = css`
  background: #EBEAEC;
  border-radius: 38px;
  width: 100%;
  font-size: 16px;
  font-weight: 650;
  color: #1E1E3F;
  text-align: center;
  padding: 20px;
  margin-bottom: 15px;
  &:hover {
    background: #404EFB;
    color: #FFFFFF;
  }
`;

export const ProductImage = css`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 100%;
  padding-top: 55px;
`;