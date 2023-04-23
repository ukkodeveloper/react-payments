import styled from 'styled-components';
import refineExpirationDate from '../../utils/refineExpirationDate';

interface CardProps {
  cardNumber: string[];
  ownerName: string;
  expirationDate: string[];
}

const Card = ({ cardNumber, ownerName, expirationDate }: CardProps) => {
  return (
    <CardContainer>
      <CardChip></CardChip>
      <CardNumberContainer>{cardNumber.join(' ')}</CardNumberContainer>
      <CardNameContainer>
        <span>{ownerName}</span>
        <span>{refineExpirationDate(expirationDate)}</span>
      </CardNameContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 213px;
  height: 133px;

  display: flex;
  flex-direction: column;
  row-gap: 13px;
  justify-content: flex-end;

  background: #333333;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  padding: 14px;
  margin: 25px auto;

  box-sizing: border-box;
`;

const CardChip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
`;
const CardNumberContainer = styled.div`
  display: flex;
  justify-content: space-around;

  height: 13px;

  color: white;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 3px;

  span {
    width: 35px;
    display: inline-block;
  }
`;

const CardNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 13px;

  color: white;
  font-weight: 600;
  font-size: 10px;
`;
