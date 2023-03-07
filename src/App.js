import './App.css';
import Navigationbar from './components/Navigationbar';
import Title from './components/Title';
import Question from './components/Question';

function App() {
  const currQuestion = {
    number: 1,
    description: "Assuming Raoult’s Law is obeyed, what will be the concentration of benzene in air at 760 mm Hg saturated with vapor of the above mixture?",
    choices: ['A. 3.5%', 'B. 4.5%', 'C. 5.1%', 'D. 9.9%'],
    answer: 'B'
  }
  return (
    <div className="App">
      <Navigationbar />
      <Title />
      <Question currQuestion={currQuestion} />
    </div>
  );
}
export default App;
