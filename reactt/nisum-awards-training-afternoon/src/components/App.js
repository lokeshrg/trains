import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Header from './header/Header';
import CategoriesPage from "./category/CategoriesPage";
import NomineesPage from './nominees/NomineesPage';
import ResultsPage from './results/ResultsPage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="container-fluid">
        <Header />

        <div>
          <Route path="/categories" component={CategoriesPage} />
          <Route path="/nominees" component={NomineesPage} />
          <Route path="/results" component={ResultsPage} />
        </div>
      </div>
    );
  }
}

export default App;
