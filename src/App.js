import React from 'react';

import {Grommet} from 'grommet'
import {grommet} from 'grommet/themes'

import Catalog from './pages/Catalog'
import Header from './components/header'
import Footer from './components/footer';

function App() {
  return (
    <Grommet full theme={grommet}>
      <Header/>
      <Catalog/>
      <Footer/>
    </Grommet>
  );
}

export default App;
