import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Login, Home, Postcard } from './screens';
import { ROUTES } from './shared';

import './App.css';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.login} exact component={Login} />
          <Route path={ROUTES.home} exact component={Home} />
          <Route path={ROUTES.postcard} exact component={Postcard} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default App;
