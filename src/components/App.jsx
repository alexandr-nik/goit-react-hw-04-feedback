import { useState } from 'react';
import { Section } from './Section';
import { Feedback } from './Feedback';
import { Statistic } from './Statistics';
import { NotificationText } from './Add.styled';

export function App() {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  const [feedCount, setFeedCount] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedCount;
  const onBtnClick = (e, el) => {
    setFeedCount(prev => ({
      ...prev,
      [el]: prev[el] + 1,
    }));
    //   switch (el) {
    //   case 'good':
    //     setGood(prev => prev + 1);
    //     break;
    //   case 'bad':
    //     setBad(prev => prev + 1);
    //     break;
    //   case 'neutral':
    //     setNeutral(prev => prev + 1);
    //     break;
    //   default:
    //     break;
    // }
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((100 * good) / countTotalFeedback());
  };

  const countTotalFeedback = () => {
    return Math.ceil(good + neutral + bad);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback
          onBtnClick={onBtnClick}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <NotificationText>No feedback given</NotificationText>
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
