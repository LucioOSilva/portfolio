import React from 'react';
import { Home, NotFound, ProjectsBack, ProjectsFront } from './pages';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/portfolio" component={Home}/>
        <Route path="/frontend" component={ProjectsFront}/>
        <Route path="/backend" component={ProjectsBack}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
