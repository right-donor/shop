import React from 'react';

import {Grommet} from 'grommet'
import {grommet} from 'grommet/themes'

import Catalog from './pages/Catalog'

function App() {
  return (
    <Grommet full theme={grommet}>
      <Catalog/>
    </Grommet>
  );
}

export default App;
