/**
 * @file App component.
 */

import React from 'react';

import Timestamp from './Timestamp';
import HomePage from './HomePage';

const App = () => {
  return (
    <div>
      <Timestamp />
      <HomePage />
    </div>
  );
};

export default App;
