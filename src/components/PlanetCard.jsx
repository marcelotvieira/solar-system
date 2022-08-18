import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { props } = this;
    const { planet } = props;
    const { name: planetName, image: planetImage } = planet;

    return (
      <div className="planet-card" data-testid="planet-card">
        <img
          className={ planetName }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p data-testid="planet-name">
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planet: PropTypes.objectOf(PropTypes.string).isRequired,
};
