import React, { Component } from 'react';
import MTGLink from './MTGLink';

const MTGDeck = (props) => {
  const items = props.items.map((lineItem, i) => <MTGLink key={i} {...lineItem} />);
  return (
    <div className="deck">
      {items}
    </div>
  );
};

export default MTGDeck;
