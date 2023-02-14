import PropTypes from 'prop-types';
import { FeedStatisticText, FeedStatisticBlockText } from './Statistics.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <FeedStatisticBlockText>
      <FeedStatisticText>Good: {good}</FeedStatisticText>
      <FeedStatisticText>Neutral: {neutral}</FeedStatisticText>
      <FeedStatisticText>Bad: {bad}</FeedStatisticText>
      <FeedStatisticText>Total: {countTotalFeedback}</FeedStatisticText>
      <FeedStatisticText>
        Positive feedback: {countPositiveFeedbackPercentage}%
      </FeedStatisticText>
    </FeedStatisticBlockText>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
};
