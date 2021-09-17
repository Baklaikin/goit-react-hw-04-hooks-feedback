import React from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";

class Feedback extends React.Component {
  constructor({ options }) {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    this.options = options;
  }

  onButtonClick = (item) => {
    this.setState((prevState) => {
      return { [item]: prevState[item] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positive = Math.floor(
      ((good + neutral) / (good + neutral + bad)) * 100
    );
    return positive;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            state={this.state}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default Feedback;
