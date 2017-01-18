import React from 'react';
import MTGLinkLoader from '../MTGLinkLoader';

const MTGDeck = (props) => {
  const items = props.items.map((lineItem, i) => <MTGLinkLoader key={i} {...lineItem} />);
  return (
    <div className="deck">
      {items}
    </div>
  );
};

export default MTGDeck;
