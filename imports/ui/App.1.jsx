import React from 'react';
import config1, { Title, Players } from './Config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "xx",
      score: 5
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    })
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
          {this.props.PropsPlayer.map(player => <p key={player._id}>{player.name} has {player.score} points</p>)}
          {/* <div><button className="ui button" onClick={this.handleSubmit} /></div> */}
        </div>
      </div>
    )
  };
};

console.log(Players);

export default App;
