import "./App.css";
import Feedback from "components/FeedbackLogic/FeedbackLogic";
const options = ["Good", "Neutral", "Bad"];

function App() {
  return <Feedback options={options} />;
}

export default App;
