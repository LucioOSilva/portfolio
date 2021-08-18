import React from 'react';
import { Home, NotFound,/* ProjectsBack, ProjectsFront,*/ UnderConstruction } from './pages';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/portfolio" component={Home}/>
        <Route path="/frontend" component={UnderConstruction}/>
        <Route path="/backend" component={UnderConstruction}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
