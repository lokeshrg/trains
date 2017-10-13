import React from 'react';
import PropTypes from 'prop-types';

class NomineesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Nominees List</h1>
            </div>
        );
    }
}

NomineesPage.propTypes = {
};

export default NomineesPage;