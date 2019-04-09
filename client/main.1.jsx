import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
//import App from '/imports/ui/App';
import PlayersData from '../imports/api/PlayersData';
import { Tracker } from 'meteor/tracker';
import { Title } from '../imports/ui/Config'

Meteor.startup(() => {
  Tracker.autorun(() => {
    let playersDB = PlayersData.find().fetch();
    let jsx = (
      < div >
        <h1>{Title}</h1>
        {playersDB.map(player => <p key={player._id}>{player.name} has {player.score} points</p>)}
        <p>jkjkjk</p>
      </div >
    );
    render(jsx, document.getElementById('react-target'));
  });
});
