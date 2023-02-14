import styled from 'styled-components';

export const FeedBlock = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
export const FeedBlockBtn = styled.div`
  display: flex;
  gap: 10px;
`;
export const FeedBtn = styled.button.attrs({ type: 'button' })`
  width: 70px;
  cursor: pointer;
  padding: 4px;
  border: 1px solid black;
  border-radius: 43px;
  transition: all 250ms ease;
  :hover {
    background: ${props => bgColor(props)};
  }
`;
const bgColor = ({ value }) => {
  let hovBgColor = 'grey';
  switch (value) {
    case 'good':
      hovBgColor = 'green';
      break;
    case 'neutral':
      hovBgColor = 'yellow';
      break;
    case 'bad':
      hovBgColor = 'red';
      break;
    default:
      break;
  }
  return hovBgColor;
};
