import React from 'react';

import {Grommet} from 'grommet'
import {grommet} from 'grommet/themes'
import Catalog from './pages/Catalog'
import {withAuthenticator} from 'aws-amplify-react'

function App() {
  return (
    <Grommet full theme={grommet}>
      <Catalog/>
    </Grommet>
  );
}

export default withAuthenticator(App,true);
