// @flow

import React from 'react';

import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';
import './App.css';

function App (): React$Element<any> {
  return (
    <div>
        <ListContainer />
        <FormContainer />
    </div>
  );
}

export default App;
