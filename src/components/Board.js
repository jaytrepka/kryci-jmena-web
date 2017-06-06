// @flow
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import guessData from './guessData.js';
import {decode, encode} from './crypt.js';
import {getLocaleData, setCards, setGameId} from './localStorage.js';
import capybara from './capybara.png';
// PATTERN
// 0 - neutral (gray)
// 1 - red
// 2 - blue
// 3 - black
const defaultPattern = '0000000111111111222222223';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      game: '',
      pattern: '',
      guessed: [],
    };
  }

  componentDidMount() {
    if (this.props.guess) {
      const data = this.shuffleArray(guessData).slice(0, 25);
      const guessed = [];
      for (let i = 0; i < 25; i++) {
        guessed.push(false);
      }
      this.setState({guessed, data});
    }
  }

  shuffle(string) {
    let a = string.split(''), n = a.length;

    for (let i = n - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join('');
  }

  shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  startNew() {
    const pattern = this.shuffle(defaultPattern);
    const game = encode(pattern);
    setGameId(game);
    setCards(this.state.data);
    this.setState({game, pattern});
  }

  startSpecial(game) {
    setGameId(game);
    setCards(this.state.data);
    const pattern = decode(game);
    this.setState({game, pattern});
  }

  async loadLast() {
    const {data, game} = getLocaleData();
    await this.setState({data});
    this.startSpecial(game);
  }

  getClass(index) {
    const {pattern} = this.state;
    switch (pattern[index]) {
      case '0':
        return 'gray';
      case '1':
        return 'red';
      case '2':
        return 'blue';
      case '3':
      default:
        return 'black';
    }
  }

  getLines() {
    const {data, guessed} = this.state;
    const {guess, help} = this.props;
    const rows = [];
    for (let i = 0; i < 25; i++) {
      rows.push(
        <div
          className={
            `${this.getClass(i)} ${guessed[i] || help ? 'guessed' : ''}`
          }
          onClick={() => this.setGuessed(i)}
        >
          {guess && !guessed[i] && data[i]}
          {this.getClass(i) === 'black' &&
            (guessed[i] || help) &&
            <img src={capybara} alt="capybara" width="90%" />}
        </div>,
      );
    }
    return rows;
  }

  setGuessed(index) {
    if (this.props.guess) {
      let newGuessed = this.state.guessed;
      newGuessed[index] = !newGuessed[index];
      this.setState({guessed: newGuessed});
    }
  }

  render() {
    const {game} = this.state;

    return (
      <div>
        {game === '' &&
          <div>
            Load last game:
            <button onClick={() => this.loadLast()}>Load Last</button>
            Or start new:
            <button onClick={() => this.startNew()}>Start</button>
            Or start special:
            <input
              ref={input => {
                this.textInput = input;
              }}
              type="text"
            />
            <button onClick={() => this.startSpecial(this.textInput.value)}>
              Start
            </button>
          </div>}

        {game !== '' &&
          <div>
            <div className="header">
              Game no. {game}
              <Link to="/">to Home</Link>
            </div>
            <div className="line">
              {this.getLines()}
            </div>
          </div>}
        <style jsx>
          {
            `
            .line {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              height: 90vh;
            }
            .gray, .red, .black, .blue {
              width: calc(20% - 25px);
              height: 14vh;
              margin: 10px;
              background: white;
              color: black;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 25px;
              border: 1px solid black;
              text-align: center;
              word-wrap: break-word;
              word-break: break-all;
            }
            .guessed, .black {
              border: 1px solid white;
            }
            .gray.guessed {
              background: gray;
              color: gray;
            }
            .red.guessed {
              background: red;
              color: red;
            }
            .blue.guessed {
              background: blue;
              color: blue;
            }
            .black.guessed {
              background: black;
              color: black;
            }

            @media (min-width: 900px) {
              .line {
                font-size: 36px;
              }
            }
            `
          }
        </style>
      </div>
    );
  }
}

export default Board;
