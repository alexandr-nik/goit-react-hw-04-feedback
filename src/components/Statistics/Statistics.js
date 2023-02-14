import PropTypes from 'prop-types';
import { FeedStatisticText, FeedStatisticBlockText } from './Statistics.styled';

export const Statistic = ({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  const { good, neutral, bad } = state;
  return (
    <FeedStatisticBlockText>
    <FeedStatisticText>Good: {good}</FeedStatisticText>
          <FeedStatisticText>Neutral: {neutral}</FeedStatisticText>
          <FeedStatisticText>Bad: {bad}</FeedStatisticText>
          <FeedStatisticText>Total: {countTotalFeedback()}</FeedStatisticText>
          <FeedStatisticText>
            Positive feedback: {countPositiveFeedbackPercentage()}%
          </FeedStatisticText>
    </FeedStatisticBlockText>
  );
};
Statistic.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
};
