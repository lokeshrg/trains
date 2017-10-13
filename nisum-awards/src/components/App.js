import React from 'react';
import Header from './Header';
import CategoryPage from './CategoryPage';
import NomineesPage from './NomineesPage';
import ResultsPage from './ResultsPage';
import { Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div>
                    <Route path="/categories" component={CategoryPage} />
                    <Route path="/nominees" component={NomineesPage} />
                    <Route path="/results" component={ResultsPage} />
                </div>
            </div>
        );
    }
}
export default App;