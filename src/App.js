import './App.scss';
import React from 'react';
import Practice from './practice/Practice';
import Quiz from './quiz/Quiz';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        type: 'practice',
    }
    this.handlePracticeClick = this.handlePracticeClick.bind(this);
    this.handleQuizClick = this.handleQuizClick.bind(this);
  }

  handlePracticeClick() {
    this.setState({type: 'practice'});
  }

  handleQuizClick() {
    this.setState({type: 'quiz'});
  }

  render() {

    let type = this.state.type;

    if (this.state.type === 'practice') {
      return (
        <div>
          <div className="navbar">
            <span className="navbar-title">BRAILLE FLASHCARDS</span>
            <span className="navbar-item"><nav onClick={this.handlePracticeClick}>Practice</nav></span>
            <span className="navbar-item"><nav onClick={this.handleQuizClick}>Quiz</nav></span>
          </div>
          <Practice />
        </div>
      );
      } else {
        return (
        <div>
          <div className="navbar">
            <span className="navbar-title">BRAILLE FLASHCARDS</span>
            <span className="navbar-item"><nav onClick={this.handlePracticeClick}>Practice</nav></span>
            <span className="navbar-item"><nav onClick={this.handleQuizClick}>Quiz</nav></span>
          </div>
          <Quiz />
        </div>
        );
      }
  }
}

export default App;
