import PropTypes from 'prop-types';
import { FeedBlock, FeedBlockBtn, FeedBtn } from './Feedback.styled';

export const Feedback = ({ options, onBtnClick }) => {
  return (
    <FeedBlock>
      <FeedBlockBtn>
        {options.map(el => {
          return (
            <FeedBtn key={el} onClick={e => onBtnClick(e, el)} value={el}>
              {el}
            </FeedBtn>
          );
        })}
      </FeedBlockBtn>
    </FeedBlock>
  );
};
Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
