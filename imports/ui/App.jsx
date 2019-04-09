import React from 'react';
import config1, { Title, Players } from './Config';
//import PlayersData from '../api/PlayersData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      score: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit(event) {
    event.preventDefault();
    PlayersData.insert({
      name: this.state.name,
      score: this.state.score
    });
    this.setState({
      name: "",
      score: 0
    })
  };
  removePlayer(event) {
    const id = event.target.name;
    PlayersData.remove({ _id: id });
  };
  minusScore(event) {
    const id = event.target.name;
    PlayersData.update({ _id: id }, { $inc: { score: -1 } });
  };
  addScore(event) {
    const id = event.target.name;
    PlayersData.update({ _id: id }, { $inc: { score: 1 } });
  };
  render(props) {
    return (
      <div>
        <h1>Keep the Score !</h1>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="fields">
            <div className="field">
              <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className="field">
              <input type="number" placeholder="Score" name="score" value={this.state.score} onChange={this.handleChange} />
            </div>
            <div>
              <button className="ui button" onSubmit={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
        <div>
          {this.props.PropsPlayer.map(player =>
            <div key={player._id}>{player.name}>
              <label>  has {player.score} points </label>
              <button className="ui button" name={player._id} onClick={this.minusScore}>-1</button>
              <button className="ui button" name={player._id} onClick={this.addScore}>+1</button>
              <button className="ui button" name={player._id} onClick={this.removePlayer}>x</button>
            </div>
          )}
        </div>
      </div>
    )
  };
};

console.log(Players);

export default App;
