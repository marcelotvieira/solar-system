import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    const planetList = planets.map((planet, index) => (<PlanetCard
      key={ index }
      planet={ planet }
    />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planet-list">
          { planetList }
        </div>
      </div>
    );
  }
}
