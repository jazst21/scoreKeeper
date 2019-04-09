import { Meteor } from 'meteor/meteor';
import PlayersData from '../imports/api/PlayersData';
import { Players } from '../imports/ui/Config.js';

Meteor.startup(() => {
  // Players.map(player => {
  //   PlayersData.insert({
  //     name: player.name,
  //     score: player.score
  //   })
  // })
  // console.log(Players);
  // console.log(PlayersData.find().fetch())
  // console.log(Players[1].score);
});
