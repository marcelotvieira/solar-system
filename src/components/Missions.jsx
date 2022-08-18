import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    const missionsList = missions.map((mission, index) => (<MissionCard
      name={ mission.name }
      year={ mission.year }
      country={ mission.country }
      destination={ mission.destination }
      key={ index }
    />));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions-container">{ missionsList }</div>
      </div>
    );
  }
}
