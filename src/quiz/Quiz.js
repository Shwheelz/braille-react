import React from 'react';
import Flashcard from '../Flashcard';
import { brailleAlphabet } from '../braille-alphabet';
import './Quiz.scss';

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFront: true,
            shuffledLetters: this.shuffleLetters(),
            currentIndex: 0,
            value: '',
            answerSheet: Array(26).fill(0),
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    shuffleLetters() {
        let shuffledArray = brailleAlphabet;
        
        for (let i = shuffledArray.length -1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
        }

        return shuffledArray;
    }

    getRandomLetter() {
        return brailleAlphabet[Math.floor(Math.random() * brailleAlphabet.length)];
    }

    handleSubmit(e) {
        // Add a point if the question is correct
        if (this.state.value.toLowerCase() === this.state.shuffledLetters[this.state.currentIndex].englishLetter) {
            let answerSheetCopy = this.state.answerSheet;
            answerSheetCopy[this.state.currentIndex] = 1;
            this.setState({answerSheet: answerSheetCopy});
        }

        // Show score if at the end, otherwise increment the currentIndex
        if (this.state.currentIndex !== this.state.shuffledLetters.length -1) {
            this.setState({currentIndex: this.state.currentIndex + 1});
        } else {
            alert(`Final Score: ${this.calculateFinalScore(this.state.answerSheet)}/26.  Quiz will be reset.`);
            this.setState({
                currentIndex: 0,
                shuffledLetters: this.shuffleLetters(),
                value: '',
                answerSheet: Array(26).fill(0),
            });
        }

        this.setState({value: ''});

        e.preventDefault();

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    calculateFinalScore(answerSheet) {
        
        let sum = 0;
        
        for (let i = 0; i < answerSheet.length; i++) {
            sum += answerSheet[i];
        }

        return sum;
    }

    render() {

        let isFront = this.state.isFront;
        let letter = this.state.shuffledLetters[this.state.currentIndex];

        return (
            <div className="quiz">
                <Flashcard
                    isFront={isFront}
                    letter={letter} />
                <form onSubmit={this.handleSubmit}>
                    <input className="answer-input" type="text" value={this.state.value} onChange={this.handleChange} />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Quiz;