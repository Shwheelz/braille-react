import React from 'react';
import './Flashcard.scss';

class Flashcard extends React.Component {

    render() {
        return (
            <div className="card">
                {this.props.isFront ? this.props.letter.brailleUnicodeCharacter : this.props.letter.englishLetter.toUpperCase()}
            </div>
        )
    }
}

export default Flashcard;