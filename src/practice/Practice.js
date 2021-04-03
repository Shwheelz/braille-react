import React from 'react';
import Flashcard from '../Flashcard';
import { brailleAlphabet } from '../braille-alphabet';
import './Practice.scss';

class Practice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFront: true,
            letter: this.getRandomLetter(),
        }
    }

    getRandomLetter() {
        let randomLetter = brailleAlphabet[Math.floor(Math.random() * brailleAlphabet.length)];
        console.log(randomLetter);
        return randomLetter;
    }

    flipCard() {
        this.setState({isFront: !this.state.isFront})
    }

    drawCard() {
        this.setState({
            isFront: true,
            letter: this.getRandomLetter(),
        });
    }

    render() {

        const isFront = this.state.isFront;
        const letter = this.state.letter;

        return (
            <div className="practice">
                <Flashcard 
                    isFront={isFront}
                    letter={letter}/>
                <button 
                    className="btn-flip" 
                    onClick={() => this.flipCard()}>
                    Flip Card
                </button>
                <button
                    className="btn-draw"
                    onClick={() => this.drawCard()}>
                    Draw New Card
                </button>
            </div>
        )
    }
}

export default Practice;