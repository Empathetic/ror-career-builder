import React from 'react';
import AbilityMorale from './AbilityMorale';
import '../../scss/components/CoreMorales.scss';

const CoreMorales = (props) => {
  const renderAbility = (ability, rank) => 
    <AbilityMorale 
      key={ability.id}
      details={ability}
      currentLevel={props.currentLevel}
      setUserSelectionMorale={props.setUserSelectionMorale}
      userSelections={props.userSelections}
      moraleRank={rank}
      setSelectedAbilities={props.setSelectedAbilities}
      selectedAbilities={props.selectedAbilities}
      incrementMasteryPoints={props.incrementMasteryPoints}
    />;
  const renderMorales = (rank1, rank2, rank3, rank4) =>
    <div className="o-row u-display__block-mobile">
      <div className="c-morale c-morale--1">
        <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 1</h3>
        <div className="c-morale__abilities">
          {rank1.map(
            (key) => renderAbility(props.abilities[key], 1)
          )}
        </div>
      </div>
      <div className="c-morale c-morale--2">
        <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 2</h3>
        <div className="c-morale__abilities">
          {rank2.map(
            (key) => renderAbility(props.abilities[key], 2)
          )}
        </div>
      </div>
      <div className="c-morale c-morale--3">
        <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 3</h3>
        <div className="c-morale__abilities">
          {rank3.map(
            (key) => renderAbility(props.abilities[key], 3)
          )}
        </div>
      </div>
      <div className="c-morale c-morale--4">
        <h3 className="c-morale__title t-secondary t-secondary__subtitle">Rank 4</h3>
        <div className="c-morale__abilities">
          {rank4.map(
            (key) => renderAbility(props.abilities[key], 4)
          )}
        </div>
      </div>
    </div>;
  const sortMorales = () => {
    const rank1 = [];
    const rank2 = [];
    const rank3 = [];
    const rank4 = [];
    for (const moraleKey in props.morales) {
      if ({}.hasOwnProperty.call(props.morales, moraleKey)) {
        switch (props.abilities[props.morales[moraleKey]].cost) {
          case 'Rank 1 morale':
            rank1.push(props.abilities[props.morales[moraleKey]].id);
            break;
          case 'Rank 2 morale':
            rank2.push(props.abilities[props.morales[moraleKey]].id);
            break;
          case 'Rank 3 morale':
            rank3.push(props.abilities[props.morales[moraleKey]].id);
            break;
          case 'Rank 4 morale':
            rank4.push(props.abilities[props.morales[moraleKey]].id);
            break;
          default :
            break;
        }
      }
    }
    return renderMorales(rank1, rank2, rank3, rank4);
  };
  return (
    <div className="u-margin__bottom">
      <div className="c-box">
        <h2 className="c-page-title">Core morales</h2>
        {sortMorales()}
      </div>
    </div>
  );
};

CoreMorales.propTypes = {
  morales: React.PropTypes.array,
  abilities: React.PropTypes.object,
  currentLevel: React.PropTypes.number,
  setUserSelectionMorale: React.PropTypes.func,
  userSelections: React.PropTypes.object,
  setSelectedAbilities: React.PropTypes.func,
  selectedAbilities: React.PropTypes.array,
  incrementMasteryPoints: React.PropTypes.func,
};

export default CoreMorales;
