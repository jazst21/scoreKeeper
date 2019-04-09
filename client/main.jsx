import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import PlayersData from '../imports/api/PlayersData';
import { Tracker } from 'meteor/tracker';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let playersDB = PlayersData.find().fetch();
    render(<App PropsPlayer={playersDB} />, document.getElementById('react-target'));
  });
});
